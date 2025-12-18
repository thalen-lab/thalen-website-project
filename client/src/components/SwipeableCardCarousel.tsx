import { useState, useCallback, useRef, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCarouselSwipe } from '@/hooks/useSwipeGesture';

interface SwipeableCardCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  itemClassName?: string;
  showNavigation?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  gap?: number;
  visibleItems?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  onIndexChange?: (index: number) => void;
}

export function SwipeableCardCarousel<T>({
  items,
  renderItem,
  className,
  itemClassName,
  showNavigation = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  loop = true,
  gap = 24,
  visibleItems = { mobile: 1, tablet: 2, desktop: 3 },
  onIndexChange
}: SwipeableCardCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentVisibleItems, setCurrentVisibleItems] = useState(visibleItems.mobile);

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCurrentVisibleItems(visibleItems.desktop);
      } else if (width >= 768) {
        setCurrentVisibleItems(visibleItems.tablet);
      } else {
        setCurrentVisibleItems(visibleItems.mobile);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [visibleItems]);

  // Update container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const maxIndex = Math.max(0, items.length - currentVisibleItems);

  const handleIndexChange = useCallback((index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    onIndexChange?.(newIndex);
  }, [maxIndex, onIndexChange]);

  // Swipe gesture hook
  const { ref: swipeRef, isSwiping, deltaX } = useCarouselSwipe({
    itemCount: maxIndex + 1,
    currentIndex,
    onIndexChange: handleIndexChange,
    loop,
    threshold: 50
  });

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || items.length <= currentVisibleItems) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, maxIndex, loop, items.length, currentVisibleItems]);

  // Calculate item width
  const itemWidth = containerWidth > 0 
    ? (containerWidth - (gap * (currentVisibleItems - 1))) / currentVisibleItems 
    : 0;

  // Calculate transform with swipe delta
  const baseTransform = -(currentIndex * (itemWidth + gap));
  const swipeTransform = isSwiping ? deltaX : 0;
  const transform = baseTransform + swipeTransform;

  // Navigation handlers
  const goToPrevious = () => {
    if (currentIndex > 0) {
      handleIndexChange(currentIndex - 1);
    } else if (loop) {
      handleIndexChange(maxIndex);
    }
  };

  const goToNext = () => {
    if (currentIndex < maxIndex) {
      handleIndexChange(currentIndex + 1);
    } else if (loop) {
      handleIndexChange(0);
    }
  };

  const canGoPrevious = loop || currentIndex > 0;
  const canGoNext = loop || currentIndex < maxIndex;

  if (items.length === 0) return null;

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div 
        ref={(node) => {
          containerRef.current = node;
          // @ts-ignore - combining refs
          if (swipeRef) swipeRef.current = node;
        }}
        className="overflow-hidden touch-pan-y"
      >
        <div
          className={cn(
            "flex transition-transform duration-300 ease-out",
            isSwiping && "transition-none"
          )}
          style={{
            transform: `translateX(${transform}px)`,
            gap: `${gap}px`
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={cn("flex-shrink-0", itemClassName)}
              style={{ width: itemWidth > 0 ? `${itemWidth}px` : `calc(${100 / currentVisibleItems}% - ${gap * (currentVisibleItems - 1) / currentVisibleItems}px)` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {showNavigation && items.length > currentVisibleItems && (
        <>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10",
              "bg-background/90 backdrop-blur-sm border-border shadow-lg",
              "hover:bg-background hover:scale-105 transition-all",
              "hidden md:flex",
              !canGoPrevious && "opacity-50 cursor-not-allowed"
            )}
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10",
              "bg-background/90 backdrop-blur-sm border-border shadow-lg",
              "hover:bg-background hover:scale-105 transition-all",
              "hidden md:flex",
              !canGoNext && "opacity-50 cursor-not-allowed"
            )}
            onClick={goToNext}
            disabled={!canGoNext}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dot indicators */}
      {showDots && items.length > currentVisibleItems && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => handleIndexChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Swipe hint for mobile */}
      <div className="md:hidden text-center mt-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Swipe to navigate
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

// Simplified swipeable container for any content
interface SwipeableContainerProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
  threshold?: number;
}

export function SwipeableContainer({
  children,
  onSwipeLeft,
  onSwipeRight,
  className,
  threshold = 50
}: SwipeableContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsSwiping(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (startX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    setDeltaX(diff);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (Math.abs(deltaX) >= threshold) {
      if (deltaX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    }
    startX.current = null;
    setDeltaX(0);
    setIsSwiping(false);
  }, [deltaX, threshold, onSwipeLeft, onSwipeRight]);

  return (
    <div
      ref={containerRef}
      className={cn("touch-pan-y", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: isSwiping ? `translateX(${deltaX * 0.3}px)` : undefined,
        transition: isSwiping ? 'none' : 'transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
}
