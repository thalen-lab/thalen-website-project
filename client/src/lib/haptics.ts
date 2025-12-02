/**
 * Haptic Feedback Utility for iOS Devices
 * Uses the Taptic Engine API to provide tactile feedback
 */

export type HapticStyle = 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error';

/**
 * Trigger haptic feedback on supported devices
 * Falls back gracefully on non-iOS devices or older browsers
 */
export function triggerHaptic(style: HapticStyle = 'light'): void {
  // Check if Haptic Feedback API is available
  if (!('vibrate' in navigator) && !(window as any).webkit?.messageHandlers) {
    return; // Silently fail on unsupported devices
  }

  try {
    // iOS 10+ Taptic Engine (preferred method)
    if ((window as any).TapticEngine) {
      switch (style) {
        case 'light':
          (window as any).TapticEngine.impact({ style: 'light' });
          break;
        case 'medium':
          (window as any).TapticEngine.impact({ style: 'medium' });
          break;
        case 'heavy':
          (window as any).TapticEngine.impact({ style: 'heavy' });
          break;
        case 'selection':
          (window as any).TapticEngine.selection();
          break;
        case 'success':
          (window as any).TapticEngine.notification({ type: 'success' });
          break;
        case 'warning':
          (window as any).TapticEngine.notification({ type: 'warning' });
          break;
        case 'error':
          (window as any).TapticEngine.notification({ type: 'error' });
          break;
      }
      return;
    }

    // Vibration API fallback (Android and some iOS versions)
    if ('vibrate' in navigator) {
      const patterns: Record<HapticStyle, number | number[]> = {
        light: 10,
        medium: 20,
        heavy: 30,
        selection: [5, 5],
        success: [10, 50, 10],
        warning: [20, 50, 20],
        error: [30, 50, 30, 50, 30],
      };

      navigator.vibrate(patterns[style]);
    }
  } catch (error) {
    // Silently fail - haptic feedback is a progressive enhancement
    console.debug('[Haptics] Failed to trigger haptic feedback:', error);
  }
}

/**
 * Hook for button tap haptic feedback
 * Returns a function to trigger light haptic feedback
 */
export function useButtonHaptic() {
  return () => triggerHaptic('light');
}

/**
 * Hook for swipe gesture haptic feedback
 * Returns a function to trigger selection haptic feedback
 */
export function useSwipeHaptic() {
  return () => triggerHaptic('selection');
}

/**
 * Hook for form submission haptic feedback
 * Returns functions for success and error states
 */
export function useFormHaptic() {
  return {
    success: () => triggerHaptic('success'),
    error: () => triggerHaptic('error'),
  };
}

/**
 * Add haptic feedback to click events
 * Usage: <button onClick={(e) => { hapticClick(e, () => handleClick()); }}>
 */
export function hapticClick(
  event: React.MouseEvent | React.TouchEvent,
  callback?: () => void,
  style: HapticStyle = 'light'
): void {
  triggerHaptic(style);
  if (callback) {
    callback();
  }
}

/**
 * Check if device supports haptic feedback
 */
export function supportsHaptics(): boolean {
  return (
    'vibrate' in navigator ||
    !!(window as any).TapticEngine ||
    !!(window as any).webkit?.messageHandlers
  );
}

/**
 * Initialize haptic feedback on page load
 * Detects iOS and sets up Taptic Engine if available
 */
export function initializeHaptics(): void {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  
  if (isIOS && !(window as any).TapticEngine) {
    // Polyfill for iOS Taptic Engine using Vibration API
    (window as any).TapticEngine = {
      impact: ({ style }: { style: 'light' | 'medium' | 'heavy' }) => {
        const duration = style === 'light' ? 10 : style === 'medium' ? 20 : 30;
        navigator.vibrate?.(duration);
      },
      selection: () => {
        navigator.vibrate?.([5, 5]);
      },
      notification: ({ type }: { type: 'success' | 'warning' | 'error' }) => {
        const patterns = {
          success: [10, 50, 10],
          warning: [20, 50, 20],
          error: [30, 50, 30, 50, 30],
        };
        navigator.vibrate?.(patterns[type]);
      },
    };
  }

  console.debug('[Haptics] Initialized. Supported:', supportsHaptics());
}
