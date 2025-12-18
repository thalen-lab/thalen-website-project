import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSwipeGesture, useCarouselSwipe } from '../../hooks/useSwipeGesture';
import { useLoadingState, useSimulatedLoading, useProgressiveLoading } from '../../hooks/useLoadingState';
import { useOnlineStatus } from '../OfflineIndicator';

// Mock navigator.onLine
const mockNavigatorOnLine = (value: boolean) => {
  Object.defineProperty(navigator, 'onLine', {
    value,
    writable: true,
    configurable: true,
  });
};

describe('PWA and Mobile Features', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('useLoadingState', () => {
    it('initializes with correct default state', () => {
      const { result } = renderHook(() => useLoadingState());
      
      expect(result.current.isLoading).toBe(true);
      expect(result.current.isInitialLoad).toBe(true);
      expect(result.current.hasLoaded).toBe(false);
      expect(result.current.error).toBe(null);
    });

    it('initializes with custom initial loading state', () => {
      const { result } = renderHook(() => useLoadingState({ initialLoading: false }));
      
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isInitialLoad).toBe(false);
    });

    it('stopLoading updates state correctly', async () => {
      const { result } = renderHook(() => useLoadingState({ minLoadingTime: 0, loadingDelay: 0 }));
      
      act(() => {
        result.current.stopLoading();
      });

      // Wait for state update
      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasLoaded).toBe(true);
    });

    it('setError updates error state', () => {
      const { result } = renderHook(() => useLoadingState());
      const testError = new Error('Test error');
      
      act(() => {
        result.current.setError(testError);
      });

      expect(result.current.error).toBe(testError);
      expect(result.current.isLoading).toBe(false);
    });

    it('reset clears all state', () => {
      const { result } = renderHook(() => useLoadingState({ initialLoading: false }));
      
      act(() => {
        result.current.reset();
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasLoaded).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  describe('useSimulatedLoading', () => {
    it('starts with loading state when simulateOnMount is true', () => {
      const testData = { name: 'test' };
      const { result } = renderHook(() => useSimulatedLoading(testData, { simulateOnMount: true }));
      
      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBe(null);
    });

    it('returns data immediately when simulateOnMount is false', () => {
      const testData = { name: 'test' };
      const { result } = renderHook(() => useSimulatedLoading(testData, { simulateOnMount: false }));
      
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toEqual(testData);
    });

    it('loads data after delay', async () => {
      const testData = { name: 'test' };
      const { result } = renderHook(() => useSimulatedLoading(testData, { delay: 1000, simulateOnMount: true }));
      
      expect(result.current.isLoading).toBe(true);
      
      await act(async () => {
        vi.advanceTimersByTime(1000);
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toEqual(testData);
    });
  });

  describe('useProgressiveLoading', () => {
    it('starts with empty visible items', () => {
      const items = [1, 2, 3, 4, 5];
      const { result } = renderHook(() => useProgressiveLoading(items, { batchSize: 2, batchDelay: 100 }));
      
      expect(result.current.visibleItems).toEqual([]);
      expect(result.current.remainingCount).toBe(5);
      expect(result.current.isComplete).toBe(false);
    });

    it('progressively loads items in batches', async () => {
      const items = [1, 2, 3, 4, 5];
      const { result } = renderHook(() => useProgressiveLoading(items, { batchSize: 2, batchDelay: 100 }));
      
      // First batch
      await act(async () => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current.visibleItems).toEqual([1, 2]);
      
      // Second batch
      await act(async () => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current.visibleItems).toEqual([1, 2, 3, 4]);
      
      // Third batch (remaining)
      await act(async () => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current.visibleItems).toEqual([1, 2, 3, 4, 5]);
      expect(result.current.isComplete).toBe(true);
    });

    it('reset clears visible items', async () => {
      const items = [1, 2, 3];
      const { result } = renderHook(() => useProgressiveLoading(items, { batchSize: 3, batchDelay: 100 }));
      
      await act(async () => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current.visibleItems.length).toBe(3);
      
      act(() => {
        result.current.reset();
      });
      
      expect(result.current.visibleItems).toEqual([]);
      expect(result.current.isComplete).toBe(false);
    });
  });

  describe('useOnlineStatus', () => {
    it('returns current online status', () => {
      mockNavigatorOnLine(true);
      const { result } = renderHook(() => useOnlineStatus());
      
      expect(result.current.isOnline).toBe(true);
    });

    it('tracks last online time when online', () => {
      mockNavigatorOnLine(true);
      const { result } = renderHook(() => useOnlineStatus());
      
      expect(result.current.lastOnlineTime).toBeInstanceOf(Date);
    });
  });

  describe('useCarouselSwipe', () => {
    it('initializes with correct state', () => {
      const onIndexChange = vi.fn();
      const { result } = renderHook(() => useCarouselSwipe({
        itemCount: 5,
        currentIndex: 0,
        onIndexChange,
        loop: false
      }));
      
      expect(result.current.canGoNext).toBe(true);
      expect(result.current.canGoPrevious).toBe(false);
    });

    it('goToNext calls onIndexChange with next index', () => {
      const onIndexChange = vi.fn();
      const { result } = renderHook(() => useCarouselSwipe({
        itemCount: 5,
        currentIndex: 0,
        onIndexChange,
        loop: false
      }));
      
      act(() => {
        result.current.goToNext();
      });
      
      expect(onIndexChange).toHaveBeenCalledWith(1);
    });

    it('goToPrevious calls onIndexChange with previous index', () => {
      const onIndexChange = vi.fn();
      const { result } = renderHook(() => useCarouselSwipe({
        itemCount: 5,
        currentIndex: 2,
        onIndexChange,
        loop: false
      }));
      
      act(() => {
        result.current.goToPrevious();
      });
      
      expect(onIndexChange).toHaveBeenCalledWith(1);
    });

    it('respects loop option at boundaries', () => {
      const onIndexChange = vi.fn();
      const { result } = renderHook(() => useCarouselSwipe({
        itemCount: 3,
        currentIndex: 2,
        onIndexChange,
        loop: true
      }));
      
      expect(result.current.canGoNext).toBe(true);
      
      act(() => {
        result.current.goToNext();
      });
      
      expect(onIndexChange).toHaveBeenCalledWith(0);
    });

    it('prevents navigation beyond bounds when loop is false', () => {
      const onIndexChange = vi.fn();
      const { result } = renderHook(() => useCarouselSwipe({
        itemCount: 3,
        currentIndex: 0,
        onIndexChange,
        loop: false
      }));
      
      expect(result.current.canGoPrevious).toBe(false);
      
      act(() => {
        result.current.goToPrevious();
      });
      
      expect(onIndexChange).not.toHaveBeenCalled();
    });
  });
});

describe('Skeleton Loaders', () => {
  it('CardSkeleton renders without errors', async () => {
    const { CardSkeleton } = await import('../SkeletonLoaders');
    const { render } = await import('@testing-library/react');
    
    const { container } = render(React.createElement(CardSkeleton));
    expect(container.firstChild).toBeTruthy();
  });

  it('CaseStudyCardSkeleton renders without errors', async () => {
    const { CaseStudyCardSkeleton } = await import('../SkeletonLoaders');
    const { render } = await import('@testing-library/react');
    
    const { container } = render(React.createElement(CaseStudyCardSkeleton));
    expect(container.firstChild).toBeTruthy();
  });

  it('InsightCardSkeleton renders without errors', async () => {
    const { InsightCardSkeleton } = await import('../SkeletonLoaders');
    const { render } = await import('@testing-library/react');
    
    const { container } = render(React.createElement(InsightCardSkeleton));
    expect(container.firstChild).toBeTruthy();
  });

  it('CardGridSkeleton renders correct number of items', async () => {
    const { CardGridSkeleton } = await import('../SkeletonLoaders');
    const { render } = await import('@testing-library/react');
    
    const { container } = render(React.createElement(CardGridSkeleton, { count: 6 }));
    // Each card has multiple skeleton elements, so we check the grid children
    const gridChildren = container.firstChild?.childNodes;
    expect(gridChildren?.length).toBe(6);
  });

  it('HeroSkeleton renders without errors', async () => {
    const { HeroSkeleton } = await import('../SkeletonLoaders');
    const { render } = await import('@testing-library/react');
    
    const { container } = render(React.createElement(HeroSkeleton));
    expect(container.firstChild).toBeTruthy();
  });
});
