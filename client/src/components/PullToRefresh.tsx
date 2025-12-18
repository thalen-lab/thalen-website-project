import React, { ReactNode, useCallback, useState } from 'react';
import { RefreshCw, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void>;
  className?: string;
  disabled?: boolean;
  threshold?: number;
}

/**
 * Pull-to-refresh wrapper component for mobile devices.
 * Wraps content and provides visual feedback during pull gesture.
 * 
 * @example
 * <PullToRefresh onRefresh={handleRefresh}>
 *   <YourContent />
 * </PullToRefresh>
 */
export function PullToRefresh({
  children,
  onRefresh,
  className,
  disabled = false,
  threshold = 80,
}: PullToRefreshProps) {
  const {
    containerRef,
    isPulling,
    isRefreshing,
    pullDistance,
    pullProgress,
  } = usePullToRefresh({
    onRefresh,
    threshold,
    disabled,
  });

  // Only show on touch devices
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  if (!isTouchDevice || disabled) {
    return <>{children}</>;
  }

  return (
    <div 
      ref={containerRef}
      className={cn('relative', className)}
    >
      {/* Pull indicator */}
      <div
        className={cn(
          'absolute left-0 right-0 flex items-center justify-center pointer-events-none z-50',
          'transition-transform duration-200 ease-out',
          (isPulling || isRefreshing) ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          top: -60,
          transform: `translateY(${pullDistance}px)`,
        }}
      >
        <div
          className={cn(
            'flex items-center justify-center w-12 h-12 rounded-full',
            'bg-white shadow-lg border border-border',
            'transition-all duration-200'
          )}
          style={{
            transform: `scale(${0.5 + pullProgress * 0.5})`,
          }}
        >
          {isRefreshing ? (
            <RefreshCw className="w-5 h-5 text-accent animate-spin" />
          ) : pullProgress >= 1 ? (
            <RefreshCw className="w-5 h-5 text-accent" />
          ) : (
            <ArrowDown 
              className={cn(
                'w-5 h-5 text-muted-foreground transition-transform duration-200',
              )}
              style={{
                transform: `rotate(${pullProgress * 180}deg)`,
              }}
            />
          )}
        </div>
      </div>

      {/* Pull progress text */}
      {(isPulling || isRefreshing) && (
        <div
          className={cn(
            'absolute left-0 right-0 text-center text-sm text-muted-foreground',
            'pointer-events-none z-40 transition-opacity duration-200'
          )}
          style={{
            top: pullDistance - 20,
            opacity: pullProgress > 0.3 ? 1 : 0,
          }}
        >
          {isRefreshing 
            ? 'Refreshing...' 
            : pullProgress >= 1 
              ? 'Release to refresh' 
              : 'Pull down to refresh'
          }
        </div>
      )}

      {/* Content with pull transform */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: isPulling || isRefreshing 
            ? `translateY(${pullDistance}px)` 
            : 'translateY(0)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PullToRefresh;
