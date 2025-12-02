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
 */
function selectOptimalImage(
  imagePath: string,
  viewportSize: 'mobile' | 'tablet' | 'desktop',
  webpSupported: boolean
): string {
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  const imageData = manifest[normalizedPath];
  
  if (!imageData || !imageData.versions) {
    return imagePath;
  }
  
  const { versions } = imageData;
  const format = webpSupported ? 'webp' : 'jpeg';
  
  const exactKey = `${viewportSize}_${format}` as keyof ResponsiveImageVersions;
  if (versions[exactKey]) {
    return `/${versions[exactKey]}`;
  }
  
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
  
  return imagePath;
}

/**
 * Prefetch an image by creating a hidden Image object
 * This loads the image into browser cache for instant display when navigating
 * 
 * @param src - Image source URL (will be optimized to responsive version)
 */
export function prefetchImage(src: string): void {
  // Get the optimal responsive image source without using React hooks
  const webpSupported = supportsWebP();
  const viewportSize = getViewportSize();
  const responsiveSrc = selectOptimalImage(src, viewportSize, webpSupported);
  
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
