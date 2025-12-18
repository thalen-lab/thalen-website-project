import { useState, useEffect, useCallback, useRef } from 'react';

interface UseLoadingStateOptions {
  /** Minimum time to show loading state (prevents flash) */
  minLoadingTime?: number;
  /** Initial loading state */
  initialLoading?: boolean;
  /** Delay before showing loading state (prevents flash for fast loads) */
  loadingDelay?: number;
}

interface LoadingState {
  isLoading: boolean;
  isInitialLoad: boolean;
  hasLoaded: boolean;
  error: Error | null;
}

/**
 * Hook to manage loading states with skeleton support
 * Prevents loading state flash for fast operations
 */
export function useLoadingState(options: UseLoadingStateOptions = {}) {
  const {
    minLoadingTime = 300,
    initialLoading = true,
    loadingDelay = 100
  } = options;

  const [state, setState] = useState<LoadingState>({
    isLoading: initialLoading,
    isInitialLoad: initialLoading,
    hasLoaded: false,
    error: null
  });

  const loadingStartTime = useRef<number | null>(null);
  const delayTimeout = useRef<NodeJS.Timeout | null>(null);

  const startLoading = useCallback(() => {
    // Clear any existing delay timeout
    if (delayTimeout.current) {
      clearTimeout(delayTimeout.current);
    }

    // Delay showing loading state to prevent flash
    delayTimeout.current = setTimeout(() => {
      loadingStartTime.current = Date.now();
      setState(prev => ({
        ...prev,
        isLoading: true,
        error: null
      }));
    }, loadingDelay);
  }, [loadingDelay]);

  const stopLoading = useCallback(() => {
    // Clear delay timeout if loading hasn't started yet
    if (delayTimeout.current) {
      clearTimeout(delayTimeout.current);
      delayTimeout.current = null;
    }

    // If loading state was shown, ensure minimum display time
    if (loadingStartTime.current) {
      const elapsed = Date.now() - loadingStartTime.current;
      const remaining = Math.max(0, minLoadingTime - elapsed);

      setTimeout(() => {
        setState(prev => ({
          ...prev,
          isLoading: false,
          isInitialLoad: false,
          hasLoaded: true
        }));
        loadingStartTime.current = null;
      }, remaining);
    } else {
      // Loading state was never shown, just update
      setState(prev => ({
        ...prev,
        isLoading: false,
        isInitialLoad: false,
        hasLoaded: true
      }));
    }
  }, [minLoadingTime]);

  const setError = useCallback((error: Error) => {
    if (delayTimeout.current) {
      clearTimeout(delayTimeout.current);
      delayTimeout.current = null;
    }
    
    setState(prev => ({
      ...prev,
      isLoading: false,
      error
    }));
    loadingStartTime.current = null;
  }, []);

  const reset = useCallback(() => {
    if (delayTimeout.current) {
      clearTimeout(delayTimeout.current);
      delayTimeout.current = null;
    }
    
    setState({
      isLoading: false,
      isInitialLoad: false,
      hasLoaded: false,
      error: null
    });
    loadingStartTime.current = null;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (delayTimeout.current) {
        clearTimeout(delayTimeout.current);
      }
    };
  }, []);

  return {
    ...state,
    startLoading,
    stopLoading,
    setError,
    reset
  };
}

/**
 * Hook to simulate data loading with skeleton states
 * Useful for demonstrating skeleton loaders
 */
export function useSimulatedLoading<T>(
  data: T,
  options: { delay?: number; simulateOnMount?: boolean } = {}
) {
  const { delay = 1500, simulateOnMount = true } = options;
  const [isLoading, setIsLoading] = useState(simulateOnMount);
  const [loadedData, setLoadedData] = useState<T | null>(simulateOnMount ? null : data);

  useEffect(() => {
    if (simulateOnMount) {
      const timer = setTimeout(() => {
        setLoadedData(data);
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [data, delay, simulateOnMount]);

  const reload = useCallback(() => {
    setIsLoading(true);
    setLoadedData(null);
    
    setTimeout(() => {
      setLoadedData(data);
      setIsLoading(false);
    }, delay);
  }, [data, delay]);

  return {
    isLoading,
    data: loadedData,
    reload
  };
}

/**
 * Hook for progressive loading - shows content as it becomes available
 */
export function useProgressiveLoading<T>(
  items: T[],
  options: { batchSize?: number; batchDelay?: number } = {}
) {
  const { batchSize = 3, batchDelay = 200 } = options;
  const [visibleCount, setVisibleCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (visibleCount >= items.length) {
      setIsComplete(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + batchSize, items.length));
    }, batchDelay);

    return () => clearTimeout(timer);
  }, [visibleCount, items.length, batchSize, batchDelay]);

  const reset = useCallback(() => {
    setVisibleCount(0);
    setIsComplete(false);
  }, []);

  return {
    visibleItems: items.slice(0, visibleCount),
    remainingCount: items.length - visibleCount,
    isComplete,
    reset
  };
}
