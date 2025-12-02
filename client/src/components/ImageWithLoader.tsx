import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  blurDataURL?: string;
  lqip?: string; // Low-Quality Image Placeholder (base64 tiny image)
}

/**
 * Image component with lazy loading, skeleton loading state, and blur-up placeholder
 * Uses intersection observer to only load images when they're near the viewport
 * Improves perceived performance and initial page load time
 */
export function ImageWithLoader({
  src,
  alt,
  className,
  skeletonClassName,
  blurDataURL,
  lqip,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection observer for lazy loading
  useEffect(() => {
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
  }, []);

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

      {/* Actual image - only loads when near viewport */}
      {!hasError && shouldLoad ? (
        <img
          src={src}
          alt={alt}
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
