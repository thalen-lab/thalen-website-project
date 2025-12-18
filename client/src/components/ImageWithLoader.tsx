import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useResponsiveImage, getResponsiveSrcSet } from '@/hooks/useResponsiveImage';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  blurDataURL?: string;
  lqip?: string; // Low-Quality Image Placeholder (base64 tiny image)
  priority?: boolean; // If true, loads immediately (above-the-fold images)
  loading?: 'lazy' | 'eager'; // Native lazy loading attribute
}

/**
 * Image component with lazy loading, skeleton loading state, and blur-up placeholder
 * Uses intersection observer combined with native lazy loading for optimal performance
 * Improves perceived performance and initial page load time
 * 
 * @param priority - Set to true for above-the-fold images to load immediately
 * @param loading - Native lazy loading attribute ('lazy' for below-the-fold, 'eager' for critical images)
 */
export function ImageWithLoader({
  src,
  alt,
  className,
  skeletonClassName,
  blurDataURL,
  lqip,
  priority = false,
  loading,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority); // Priority images load immediately
  const imgRef = useRef<HTMLDivElement>(null);
  
  // Get optimal responsive image source based on viewport and format support
  const responsiveSrc = useResponsiveImage(src);
  const srcSet = getResponsiveSrcSet(src);

  // Determine loading attribute
  const loadingAttr = loading || (priority ? 'eager' : 'lazy');
  
  // Determine fetch priority for critical images
  const fetchPriority = priority ? 'high' : 'auto';

  // Intersection observer for lazy loading (fallback for older browsers)
  useEffect(() => {
    // Skip observer for priority images
    if (priority) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        // Start loading when image is 200px away from viewport
        rootMargin: '200px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div ref={imgRef} className="relative overflow-hidden">
      {/* LQIP or skeleton loader - shows before image loads */}
      {(isLoading || !shouldLoad) && (
        <div
          className={cn(
            'absolute inset-0',
            !lqip && 'bg-muted animate-pulse',
            skeletonClassName
          )}
        >
          {/* Low-Quality Image Placeholder (LQIP) */}
          {lqip && (
            <img
              src={lqip}
              alt=""
              className="w-full h-full object-cover blur-sm scale-110"
              aria-hidden="true"
            />
          )}
          
          {/* Optional additional blur placeholder */}
          {!lqip && blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              className="w-full h-full object-cover opacity-50 blur-sm"
              aria-hidden="true"
            />
          )}
        </div>
      )}

      {/* Actual image - uses native lazy loading + intersection observer fallback */}
      {!hasError && shouldLoad ? (
        <img
          src={responsiveSrc}
          srcSet={srcSet || undefined}
          sizes="(max-width: 768px) 640px, (max-width: 1280px) 1024px, 1920px"
          alt={alt}
          loading={loadingAttr}
          decoding={priority ? 'sync' : 'async'}
          // @ts-ignore - fetchpriority is a valid HTML attribute
          fetchpriority={fetchPriority}
          className={cn(
            'transition-opacity duration-500',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : hasError ? (
        // Fallback for broken images
        <div
          className={cn(
            'flex items-center justify-center bg-muted text-muted-foreground',
            className
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-30"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
