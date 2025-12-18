import { useRef, useCallback, useEffect, useState } from 'react';

interface SwipeConfig {
  threshold?: number;           // Minimum distance to trigger swipe (px)
  velocityThreshold?: number;   // Minimum velocity to trigger swipe (px/ms)
  preventScroll?: boolean;      // Prevent vertical scroll during horizontal swipe
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
  onSwipeMove?: (deltaX: number, deltaY: number) => void;
}

interface SwipeState {
  isSwiping: boolean;
  direction: 'left' | 'right' | 'up' | 'down' | null;
  deltaX: number;
  deltaY: number;
}

interface TouchPoint {
  x: number;
  y: number;
  time: number;
}

export function useSwipeGesture<T extends HTMLElement = HTMLElement>(config: SwipeConfig = {}) {
  const {
    threshold = 50,
    velocityThreshold = 0.3,
    preventScroll = true,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onSwipeStart,
    onSwipeEnd,
    onSwipeMove
  } = config;

  const elementRef = useRef<T>(null);
  const startPoint = useRef<TouchPoint | null>(null);
  const lastPoint = useRef<TouchPoint | null>(null);
  const isTracking = useRef(false);
  
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isSwiping: false,
    direction: null,
    deltaX: 0,
    deltaY: 0
  });

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    startPoint.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    lastPoint.current = startPoint.current;
    isTracking.current = true;
    
    setSwipeState({
      isSwiping: true,
      direction: null,
      deltaX: 0,
      deltaY: 0
    });
    
    onSwipeStart?.();
  }, [onSwipeStart]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isTracking.current || !startPoint.current) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - startPoint.current.x;
    const deltaY = touch.clientY - startPoint.current.y;
    
    // Determine primary direction
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    
    // If horizontal swipe is dominant and we should prevent scroll
    if (preventScroll && absX > absY && absX > 10) {
      e.preventDefault();
    }

    lastPoint.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    let direction: SwipeState['direction'] = null;
    if (absX > absY) {
      direction = deltaX > 0 ? 'right' : 'left';
    } else {
      direction = deltaY > 0 ? 'down' : 'up';
    }

    setSwipeState({
      isSwiping: true,
      direction,
      deltaX,
      deltaY
    });

    onSwipeMove?.(deltaX, deltaY);
  }, [preventScroll, onSwipeMove]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!isTracking.current || !startPoint.current || !lastPoint.current) {
      isTracking.current = false;
      return;
    }

    const deltaX = lastPoint.current.x - startPoint.current.x;
    const deltaY = lastPoint.current.y - startPoint.current.y;
    const deltaTime = lastPoint.current.time - startPoint.current.time;
    
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    
    // Calculate velocity
    const velocityX = absX / deltaTime;
    const velocityY = absY / deltaTime;

    // Determine if swipe meets threshold
    const isHorizontalSwipe = absX > absY;
    const meetsThreshold = isHorizontalSwipe 
      ? (absX >= threshold || velocityX >= velocityThreshold)
      : (absY >= threshold || velocityY >= velocityThreshold);

    if (meetsThreshold) {
      if (isHorizontalSwipe) {
        if (deltaX > 0) {
          onSwipeRight?.();
        } else {
          onSwipeLeft?.();
        }
      } else {
        if (deltaY > 0) {
          onSwipeDown?.();
        } else {
          onSwipeUp?.();
        }
      }
    }

    // Reset state
    startPoint.current = null;
    lastPoint.current = null;
    isTracking.current = false;
    
    setSwipeState({
      isSwiping: false,
      direction: null,
      deltaX: 0,
      deltaY: 0
    });

    onSwipeEnd?.();
  }, [threshold, velocityThreshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onSwipeEnd]);

  const handleTouchCancel = useCallback(() => {
    startPoint.current = null;
    lastPoint.current = null;
    isTracking.current = false;
    
    setSwipeState({
      isSwiping: false,
      direction: null,
      deltaX: 0,
      deltaY: 0
    });

    onSwipeEnd?.();
  }, [onSwipeEnd]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use passive: false to allow preventDefault
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventScroll });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    element.addEventListener('touchcancel', handleTouchCancel, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('touchcancel', handleTouchCancel);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel, preventScroll]);

  return {
    ref: elementRef,
    ...swipeState
  };
}

// Hook for carousel/slider swipe navigation
export function useCarouselSwipe(config: {
  itemCount: number;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  loop?: boolean;
  threshold?: number;
}) {
  const { itemCount, currentIndex, onIndexChange, loop = false, threshold = 50 } = config;

  const goToNext = useCallback(() => {
    if (currentIndex < itemCount - 1) {
      onIndexChange(currentIndex + 1);
    } else if (loop) {
      onIndexChange(0);
    }
  }, [currentIndex, itemCount, loop, onIndexChange]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    } else if (loop) {
      onIndexChange(itemCount - 1);
    }
  }, [currentIndex, itemCount, loop, onIndexChange]);

  const swipe = useSwipeGesture({
    threshold,
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
    preventScroll: true
  });

  return {
    ...swipe,
    goToNext,
    goToPrevious,
    canGoNext: loop || currentIndex < itemCount - 1,
    canGoPrevious: loop || currentIndex > 0
  };
}
