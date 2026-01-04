import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // If true, loads immediately (above-the-fold)
  placeholder?: 'blur' | 'skeleton' | 'none';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image component with native lazy loading.
 * Uses loading="lazy" attribute for below-the-fold images.
 * Provides placeholder options for better perceived performance.
 * 
 * @example
 * // Below-the-fold image with lazy loading
 * <LazyImage src="/image.jpg" alt="Description" />
 * 
 * // Above-the-fold image with priority loading
 * <LazyImage src="/hero.jpg" alt="Hero" priority />
 */
export function LazyImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'skeleton',
  blurDataURL,
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Determine loading strategy
  const loadingAttr = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    // Skip srcset for external URLs or data URLs
    if (src.startsWith('http') || src.startsWith('data:')) {
      return undefined;
    }
    
    // Generate srcset for common breakpoints
    const widths = [320, 640, 768, 1024, 1280, 1920];
    return widths
      .map(w => `${src} ${w}w`)
      .join(', ');
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          className
        )}
        style={{ width, height }}
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
    );
  }

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && placeholder !== 'none' && (
        <div
          className={cn(
            'absolute inset-0',
            placeholder === 'skeleton' && 'bg-muted animate-pulse',
            placeholder === 'blur' && blurDataURL && 'bg-cover bg-center blur-sm scale-105'
          )}
          style={
            placeholder === 'blur' && blurDataURL
              ? { backgroundImage: `url(${blurDataURL})` }
              : undefined
          }
        />
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loadingAttr}
        decoding={priority ? 'sync' : 'async'}
        // @ts-ignore - fetchPriority is a valid attribute
        fetchPriority={fetchPriority}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

export default LazyImage;
