import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  blurDataURL?: string;
}

/**
 * Image component with skeleton loading state and blur-up placeholder
 * Improves perceived performance on slower connections
 */
export function ImageWithLoader({
  src,
  alt,
  className,
  skeletonClassName,
  blurDataURL,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Skeleton loader - shows while image is loading */}
      {isLoading && (
        <div
          className={cn(
            'absolute inset-0 bg-muted animate-pulse',
            skeletonClassName
          )}
        >
          {/* Optional blur placeholder */}
          {blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              className="w-full h-full object-cover opacity-50 blur-sm"
              aria-hidden="true"
            />
          )}
        </div>
      )}

      {/* Actual image */}
      {!hasError ? (
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
          loading="lazy"
        />
      ) : (
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
      )}
    </div>
  );
}
