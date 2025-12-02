import { useState, useEffect } from 'react';
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
    // Check if toDataURL supports WebP
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
  const format = webpSupported ? 'webp' : 'jpeg';
  
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
 * Hook to automatically select optimal responsive image based on viewport and browser support
 * 
 * @param imagePath - Original image path (e.g., "/images/hero.jpg")
 * @returns Optimal image source URL
 * 
 * @example
 * ```tsx
 * const optimalSrc = useResponsiveImage('/images/case-study-hero.jpg');
 * return <img src={optimalSrc} alt="Case study" />;
 * ```
 */
export function useResponsiveImage(imagePath: string): string {
  const [webpSupported, setWebpSupported] = useState(false);
  const [viewportSize, setViewportSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [optimalSrc, setOptimalSrc] = useState(imagePath);
  
  // Detect WebP support on mount
  useEffect(() => {
    setWebpSupported(supportsWebP());
  }, []);
  
  // Detect viewport size and listen for resize
  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize(getViewportSize());
    };
    
    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
    
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);
  
  // Update optimal source when dependencies change
  useEffect(() => {
    const newSrc = selectOptimalImage(imagePath, viewportSize, webpSupported);
    setOptimalSrc(newSrc);
  }, [imagePath, viewportSize, webpSupported]);
  
  return optimalSrc;
}

/**
 * Generate srcSet string for responsive images
 * 
 * @param imagePath - Original image path
 * @returns srcSet string for use in <img srcSet="...">
 * 
 * @example
 * ```tsx
 * const srcSet = getResponsiveSrcSet('/images/hero.jpg');
 * return <img src="/images/hero.jpg" srcSet={srcSet} sizes="(max-width: 768px) 640px, (max-width: 1280px) 1024px, 1920px" />;
 * ```
 */
export function getResponsiveSrcSet(imagePath: string): string {
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  const imageData = manifest[normalizedPath];
  
  if (!imageData || !imageData.versions) {
    return '';
  }
  
  const { versions } = imageData;
  const srcSetParts: string[] = [];
  
  // Check WebP support
  const webpSupported = supportsWebP();
  const format = webpSupported ? 'webp' : 'jpeg';
  
  // Add mobile version
  const mobileKey = `mobile_${format}` as keyof ResponsiveImageVersions;
  if (versions[mobileKey]) {
    srcSetParts.push(`/${versions[mobileKey]} 640w`);
  }
  
  // Add tablet version
  const tabletKey = `tablet_${format}` as keyof ResponsiveImageVersions;
  if (versions[tabletKey]) {
    srcSetParts.push(`/${versions[tabletKey]} 1024w`);
  }
  
  // Add desktop version
  const desktopKey = `desktop_${format}` as keyof ResponsiveImageVersions;
  if (versions[desktopKey]) {
    srcSetParts.push(`/${versions[desktopKey]} 1920w`);
  }
  
  return srcSetParts.join(', ');
}
