import { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackToTopProps {
  /** Scroll threshold in pixels before showing the button */
  threshold?: number;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show on all pages or only long pages */
  showOnAllPages?: boolean;
}

/**
 * Floating back-to-top button that appears after scrolling past a threshold.
 * Provides smooth scroll animation back to the top of the page.
 * 
 * Features:
 * - Smooth scroll animation
 * - Fade in/out transition
 * - Accessible with keyboard support
 * - Respects reduced motion preferences
 * 
 * @example
 * // Basic usage - shows after 400px scroll
 * <BackToTop />
 * 
 * // Custom threshold
 * <BackToTop threshold={600} />
 */
export function BackToTop({ 
  threshold = 400, 
  className,
  showOnAllPages = true 
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Check scroll position and update visibility
  const checkScrollPosition = useCallback(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const shouldShow = scrollY > threshold;
    
    // Only show on long pages if showOnAllPages is false
    if (!showOnAllPages) {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const isLongPage = pageHeight > viewportHeight * 2;
      setIsVisible(shouldShow && isLongPage);
    } else {
      setIsVisible(shouldShow);
    }
  }, [threshold, showOnAllPages]);

  // Set up scroll listener
  useEffect(() => {
    // Initial check
    checkScrollPosition();

    // Throttled scroll handler for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  // Scroll to top handler
  const scrollToTop = useCallback(() => {
    setIsScrolling(true);
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Instant scroll for users who prefer reduced motion
      window.scrollTo({ top: 0 });
      setIsScrolling(false);
    } else {
      // Smooth scroll animation
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  }, []);

  // Handle keyboard interaction
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      aria-label="Scroll to top of page"
      title="Back to top"
      className={cn(
        // Base styles
        'fixed z-50 p-3 rounded-full shadow-lg transition-all duration-300',
        // Position - bottom right with safe area padding
        'bottom-6 right-6 md:bottom-8 md:right-8',
        // Colors - navy with orange hover
        'bg-[#0A2540] text-white hover:bg-[#E07020]',
        // Focus states for accessibility
        'focus:outline-none focus:ring-2 focus:ring-[#E07020] focus:ring-offset-2',
        // Visibility animation
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none',
        // Active/scrolling state
        isScrolling && 'scale-95',
        // Hover effects
        'hover:shadow-xl hover:scale-110',
        // Touch-friendly size
        'min-w-[48px] min-h-[48px] flex items-center justify-center',
        className
      )}
      disabled={isScrolling}
    >
      <ArrowUp 
        className={cn(
          'w-5 h-5 transition-transform duration-300',
          isScrolling && 'animate-bounce'
        )} 
      />
      
      {/* Ripple effect on click */}
      <span 
        className={cn(
          'absolute inset-0 rounded-full bg-white/20',
          'scale-0 transition-transform duration-300',
          isScrolling && 'scale-100 opacity-0'
        )}
      />
    </button>
  );
}

export default BackToTop;
