import lqipMap from '@/data/lqip-map.json';

/**
 * Hook to get LQIP (Low-Quality Image Placeholder) for an image path
 * Returns tiny base64-encoded placeholder for instant visual feedback
 * 
 * @param imagePath - Path to the image (e.g., "/images/hero-automation.jpg")
 * @returns Base64 data URL for the LQIP, or undefined if not found
 */
export function useLQIP(imagePath: string): string | undefined {
  return lqipMap[imagePath as keyof typeof lqipMap];
}
