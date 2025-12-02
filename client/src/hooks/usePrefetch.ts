import { useEffect, useRef } from 'react';

interface PrefetchOptions {
  /**
   * Delay in milliseconds before prefetching starts
   * Default: 100ms (prevents accidental hovers from triggering prefetch)
   */
  delay?: number;
  
  /**
   * Whether to prefetch on hover
   * Default: true
   */
  enabled?: boolean;
}

/**
 * Cache to track which URLs have already been prefetched
 * Prevents duplicate prefetch requests
 */
const prefetchedUrls = new Set<string>();

/**
 * Prefetch a URL by creating a hidden link element and triggering prefetch
 */
function prefetchUrl(url: string): void {
  // Skip if already prefetched
  if (prefetchedUrls.has(url)) {
    return;
  }
  
  // Skip external URLs
  if (url.startsWith('http') && !url.startsWith(window.location.origin)) {
    return;
  }
  
  // Create prefetch link element
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  link.as = 'document';
  
  // Add to head
  document.head.appendChild(link);
  
  // Mark as prefetched
  prefetchedUrls.add(url);
  
  // Clean up after 10 seconds (link element no longer needed)
  setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }, 10000);
}

/**
 * Hook to prefetch a link on hover for instant navigation
 * 
 * @param href - The URL to prefetch
 * @param options - Prefetch options
 * @returns Object with onMouseEnter and onMouseLeave handlers
 * 
 * @example
 * ```tsx
 * function CaseStudyCard({ href, title }) {
 *   const prefetchHandlers = usePrefetch(href);
 *   
 *   return (
 *     <Link href={href} {...prefetchHandlers}>
 *       <h3>{title}</h3>
 *     </Link>
 *   );
 * }
 * ```
 */
export function usePrefetch(
  href: string | undefined,
  options: PrefetchOptions = {}
): {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} {
  const { delay = 100, enabled = true } = options;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const handleMouseEnter = () => {
    if (!enabled || !href) return;
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Start prefetch after delay
    timeoutRef.current = setTimeout(() => {
      prefetchUrl(href);
    }, delay);
  };
  
  const handleMouseLeave = () => {
    // Cancel prefetch if user moves away quickly
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}

/**
 * Prefetch multiple URLs immediately (useful for critical navigation)
 * 
 * @param urls - Array of URLs to prefetch
 * 
 * @example
 * ```tsx
 * useEffect(() => {
 *   // Prefetch top case studies on homepage load
 *   prefetchUrls([
 *     '/case-studies/federal-automation',
 *     '/case-studies/healthcare-ai',
 *     '/case-studies/defense-cloud'
 *   ]);
 * }, []);
 * ```
 */
export function prefetchUrls(urls: string[]): void {
  urls.forEach(url => prefetchUrl(url));
}

/**
 * Clear the prefetch cache (useful for testing or memory management)
 */
export function clearPrefetchCache(): void {
  prefetchedUrls.clear();
}
