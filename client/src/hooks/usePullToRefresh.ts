import { useState, useEffect, useCallback, useRef } from 'react';

interface PullToRefreshOptions {
  onRefresh: () => Promise<void>;
  threshold?: number; // Distance in pixels to trigger refresh
  maxPull?: number; // Maximum pull distance
  disabled?: boolean;
}

interface PullToRefreshState {
  isPulling: boolean;
  isRefreshing: boolean;
  pullDistance: number;
  pullProgress: number; // 0 to 1, represents progress toward threshold
}

/**
 * Custom hook for implementing pull-to-refresh functionality on mobile devices.
 * Provides smooth pull animations and haptic-like visual feedback.
 * 
 * @param options Configuration options for pull-to-refresh behavior
 * @returns State and ref for implementing pull-to-refresh UI
 */
export function usePullToRefresh({
  onRefresh,
  threshold = 80,
  maxPull = 120,
  disabled = false,
}: PullToRefreshOptions) {
  const [state, setState] = useState<PullToRefreshState>({
    isPulling: false,
    isRefreshing: false,
    pullDistance: 0,
    pullProgress: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);
  const isAtTop = useRef<boolean>(true);

  // Check if the container is scrolled to the top
  const checkScrollTop = useCallback(() => {
    if (containerRef.current) {
      isAtTop.current = containerRef.current.scrollTop <= 0;
    } else {
      // Check window scroll position
      isAtTop.current = window.scrollY <= 0;
    }
  }, []);

  // Handle touch start
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (disabled || state.isRefreshing) return;
    
    checkScrollTop();
    if (!isAtTop.current) return;

    startY.current = e.touches[0].clientY;
    currentY.current = e.touches[0].clientY;
    
    setState(prev => ({ ...prev, isPulling: true }));
  }, [disabled, state.isRefreshing, checkScrollTop]);

  // Handle touch move
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (disabled || state.isRefreshing || !state.isPulling) return;
    if (!isAtTop.current) return;

    currentY.current = e.touches[0].clientY;
    const deltaY = currentY.current - startY.current;

    // Only activate pull-to-refresh when pulling down
    if (deltaY > 0) {
      // Apply resistance to make the pull feel more natural
      const resistance = 0.5;
      const pullDistance = Math.min(deltaY * resistance, maxPull);
      const pullProgress = Math.min(pullDistance / threshold, 1);

      // Prevent default scrolling when pulling
      if (pullDistance > 10) {
        e.preventDefault();
      }

      setState(prev => ({
        ...prev,
        pullDistance,
        pullProgress,
      }));
    }
  }, [disabled, state.isRefreshing, state.isPulling, threshold, maxPull]);

  // Handle touch end
  const handleTouchEnd = useCallback(async () => {
    if (disabled || state.isRefreshing) return;

    const { pullDistance } = state;

    if (pullDistance >= threshold) {
      // Trigger refresh
      setState(prev => ({
        ...prev,
        isRefreshing: true,
        pullDistance: threshold * 0.6, // Keep some distance while refreshing
        pullProgress: 1,
      }));

      try {
        await onRefresh();
      } catch (error) {
        console.error('Pull to refresh error:', error);
      } finally {
        // Reset state after refresh completes
        setState({
          isPulling: false,
          isRefreshing: false,
          pullDistance: 0,
          pullProgress: 0,
        });
      }
    } else {
      // Reset without refresh
      setState({
        isPulling: false,
        isRefreshing: false,
        pullDistance: 0,
        pullProgress: 0,
      });
    }
  }, [disabled, state, threshold, onRefresh]);

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current || window;
    
    // Use passive: false to allow preventDefault on touchmove
    const options: AddEventListenerOptions = { passive: false };

    container.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
    container.addEventListener('touchmove', handleTouchMove as EventListener, options);
    container.addEventListener('touchend', handleTouchEnd as EventListener, { passive: true });
    container.addEventListener('scroll', checkScrollTop, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart as EventListener);
      container.removeEventListener('touchmove', handleTouchMove as EventListener);
      container.removeEventListener('touchend', handleTouchEnd as EventListener);
      container.removeEventListener('scroll', checkScrollTop);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, checkScrollTop]);

  return {
    containerRef,
    ...state,
  };
}

export default usePullToRefresh;
