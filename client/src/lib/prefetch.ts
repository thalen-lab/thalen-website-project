import { useResponsiveImage } from '@/hooks/useResponsiveImage';

/**
 * Prefetch an image by creating a hidden Image object
 * This loads the image into browser cache for instant display when navigating
 * 
 * @param src - Image source URL (will be optimized to responsive version)
 */
export function prefetchImage(src: string): void {
  // Get the optimal responsive image source
  const responsiveSrc = useResponsiveImage(src);
  
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
