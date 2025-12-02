import { useEffect, useRef, useState } from 'react';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

interface SwipeOptions {
  minSwipeDistance?: number;
  preventDefaultTouchmoveEvent?: boolean;
}

/**
 * Custom hook for handling touch swipe gestures
 * Supports left, right, up, and down swipes
 * 
 * @param handlers - Object containing swipe direction callbacks
 * @param options - Configuration options for swipe detection
 * @returns ref - Attach this ref to the element you want to make swipeable
 */
export function useSwipe(
  handlers: SwipeHandlers,
  options: SwipeOptions = {}
) {
  const {
    minSwipeDistance = 50,
    preventDefaultTouchmoveEvent = false,
  } = options;

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number } | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchEndRef.current = null;
      touchStartRef.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (preventDefaultTouchmoveEvent) {
        e.preventDefault();
      }
      touchEndRef.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      };
    };

    const handleTouchEnd = () => {
      if (!touchStartRef.current || !touchEndRef.current) return;

      const deltaX = touchStartRef.current.x - touchEndRef.current.x;
      const deltaY = touchStartRef.current.y - touchEndRef.current.y;

      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);

      if (isHorizontalSwipe) {
        if (Math.abs(deltaX) > minSwipeDistance) {
          if (deltaX > 0) {
            handlers.onSwipeLeft?.();
          } else {
            handlers.onSwipeRight?.();
          }
        }
      } else {
        if (Math.abs(deltaY) > minSwipeDistance) {
          if (deltaY > 0) {
            handlers.onSwipeUp?.();
          } else {
            handlers.onSwipeDown?.();
          }
        }
      }

      touchStartRef.current = null;
      touchEndRef.current = null;
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventDefaultTouchmoveEvent });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handlers, minSwipeDistance, preventDefaultTouchmoveEvent]);

  return elementRef;
}
