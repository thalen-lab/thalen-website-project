import { useState, useEffect } from 'react';
import { WifiOff, RefreshCw, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfflineIndicatorProps {
  className?: string;
  showWhenOnline?: boolean;
  position?: 'top' | 'bottom';
}

export function OfflineIndicator({ 
  className, 
  showWhenOnline = false,
  position = 'bottom' 
}: OfflineIndicatorProps) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (wasOffline) {
        setShowReconnected(true);
        setTimeout(() => setShowReconnected(false), 3000);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [wasOffline]);

  const handleRetry = () => {
    window.location.reload();
  };

  // Don't show anything if online and not showing reconnected message
  if (isOnline && !showReconnected && !showWhenOnline) {
    return null;
  }

  const positionClasses = position === 'top' 
    ? 'top-0 animate-in slide-in-from-top' 
    : 'bottom-0 animate-in slide-in-from-bottom';

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50 px-4 py-2",
        positionClasses,
        className
      )}
    >
      <div
        className={cn(
          "max-w-md mx-auto rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 transition-all",
          !isOnline && "bg-amber-500 text-amber-950",
          showReconnected && "bg-green-500 text-green-950",
          isOnline && !showReconnected && showWhenOnline && "bg-green-500/10 text-green-600 border border-green-500/20"
        )}
      >
        {!isOnline ? (
          <>
            <WifiOff className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">You're offline</p>
              <p className="text-xs opacity-80">Some features may be limited</p>
            </div>
            <button
              onClick={handleRetry}
              className="flex-shrink-0 p-2 rounded-full hover:bg-amber-600/20 transition-colors"
              aria-label="Retry connection"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </>
        ) : showReconnected ? (
          <>
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">Back online</p>
              <p className="text-xs opacity-80">Connection restored</p>
            </div>
          </>
        ) : showWhenOnline ? (
          <>
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <p className="font-medium text-sm">Online</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Hook to track online/offline status
 */
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastOnlineTime, setLastOnlineTime] = useState<Date | null>(
    navigator.onLine ? new Date() : null
  );

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setLastOnlineTime(new Date());
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline,
    lastOnlineTime,
    offlineDuration: !isOnline && lastOnlineTime 
      ? Date.now() - lastOnlineTime.getTime() 
      : 0
  };
}

/**
 * Component to show cached content indicator
 */
export function CachedContentBadge({ className }: { className?: string }) {
  const { isOnline } = useOnlineStatus();

  if (isOnline) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full",
        className
      )}
    >
      <WifiOff className="h-3 w-3" />
      Cached
    </span>
  );
}
