import responsiveImagesManifest from '@/data/responsive-images.json';

interface ResponsiveImageVersions {
  mobile_webp?: string;
  mobile_jpeg?: string;
  tablet_webp?: string;
  tablet_jpeg?: string;
  desktop_webp?: string;
  desktop_jpeg?: string;
}

interface ResponsiveImageData {
  original: string;
  versions: ResponsiveImageVersions;
}

type ResponsiveImagesManifest = Record<string, ResponsiveImageData>;

const manifest: ResponsiveImagesManifest = responsiveImagesManifest as ResponsiveImagesManifest;

/**
 * Detect if browser supports WebP format
 */
function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

/**
 * Get current viewport breakpoint
 */
function getViewportSize(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1280) return 'tablet';
  return 'desktop';
}

/**
 * Select optimal image source based on viewport size and format support
 * This is a pure utility function (not a hook) that can be called anywhere
 */
function getOptimalImageSrc(imagePath: string): string {
  // Normalize path (ensure leading slash)
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // Check if we have responsive versions for this image
  const imageData = manifest[normalizedPath];
  
  if (!imageData || !imageData.versions) {
    // No responsive versions available, return original
    return imagePath;
  }
  
  const { versions } = imageData;
  
  // Determine format preference
  const webpSupported = supportsWebP();
  const format = webpSupported ? 'webp' : 'jpeg';
  
  // Get current viewport size
  const viewportSize = getViewportSize();
  
  // Try to get the exact size + format
  const exactKey = `${viewportSize}_${format}` as keyof ResponsiveImageVersions;
  if (versions[exactKey]) {
    return `/${versions[exactKey]}`;
  }
  
  // Fallback strategy: try smaller sizes if exact size not available
  if (viewportSize === 'desktop') {
    const tabletKey = `tablet_${format}` as keyof ResponsiveImageVersions;
    if (versions[tabletKey]) return `/${versions[tabletKey]}`;
    
    const mobileKey = `mobile_${format}` as keyof ResponsiveImageVersions;
    if (versions[mobileKey]) return `/${versions[mobileKey]}`;
  }
  
  if (viewportSize === 'tablet') {
    const mobileKey = `mobile_${format}` as keyof ResponsiveImageVersions;
    if (versions[mobileKey]) return `/${versions[mobileKey]}`;
  }
  
  // Last resort: return original image
  return imagePath;
}

/**
 * Prefetch an image by creating a hidden Image object
 * This loads the image into browser cache for instant display when navigating
 * 
 * @param src - Image source URL (will be optimized to responsive version)
 */
export function prefetchImage(src: string): void {
  // Get the optimal responsive image source using pure utility function
  const responsiveSrc = getOptimalImageSrc(src);
  
  // Create hidden image to trigger browser cache
  const img = new Image();
  img.src = responsiveSrc;
  
  // Optional: Also prefetch WebP version if available
  if (responsiveSrc.includes('.jpg') || responsiveSrc.includes('.png')) {
    const webpSrc = responsiveSrc.replace(/\.(jpg|png)$/, '.webp');
    const webpImg = new Image();
    webpImg.src = webpSrc;
  }
}

/**
 * Prefetch multiple images in parallel
 * Useful for prefetching all images on a target page
 * 
 * @param sources - Array of image source URLs
 */
export function prefetchImages(sources: string[]): void {
  sources.forEach(src => prefetchImage(src));
}
