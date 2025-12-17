/**
 * Push Notification Utilities
 * Handles subscription, unsubscription, and permission management for web push notifications
 */

import { VAPID_PUBLIC_KEY } from '@/const';

export interface NotificationPreferences {
  caseStudies: boolean;
  events: boolean;
  assessments: boolean;
  general: boolean;
}

/**
 * Convert VAPID public key from base64 to Uint8Array
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray as Uint8Array;
}

/**
 * Check if push notifications are supported
 */
export function isPushSupported(): boolean {
  return 'serviceWorker' in navigator && 'PushManager' in window;
}

/**
 * Get current notification permission status
 */
export function getNotificationPermission(): NotificationPermission {
  return Notification.permission;
}

/**
 * Request notification permission from user
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isPushSupported()) {
    throw new Error('Push notifications are not supported');
  }

  const permission = await Notification.requestPermission();
  return permission;
}

/**
 * Subscribe to push notifications
 */
export async function subscribeToPushNotifications(
  preferences: NotificationPreferences = {
    caseStudies: true,
    events: true,
    assessments: true,
    general: true
  }
): Promise<PushSubscription> {
  if (!isPushSupported()) {
    throw new Error('Push notifications are not supported');
  }

  // Request permission if not granted
  const permission = await requestNotificationPermission();
  if (permission !== 'granted') {
    throw new Error('Notification permission denied');
  }

  // Register service worker if not already registered
  const registration = await navigator.serviceWorker.ready;

  // Check if already subscribed
  let subscription = await registration.pushManager.getSubscription();
  
  if (!subscription) {
    // Subscribe to push notifications
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as any
    });
  }

  // Send subscription to server
  await fetch('/api/trpc/notifications.subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subscription: subscription.toJSON(),
      preferences,
      userAgent: navigator.userAgent,
      deviceType: getDeviceType()
    })
  });

  return subscription;
}

/**
 * Unsubscribe from push notifications
 */
export async function unsubscribeFromPushNotifications(): Promise<boolean> {
  if (!isPushSupported()) {
    return false;
  }

  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();

  if (subscription) {
    // Unsubscribe from push manager
    await subscription.unsubscribe();

    // Notify server
    await fetch('/api/trpc/notifications.unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        endpoint: subscription.endpoint
      })
    });

    return true;
  }

  return false;
}

/**
 * Update notification preferences
 */
export async function updateNotificationPreferences(
  preferences: NotificationPreferences
): Promise<void> {
  if (!isPushSupported()) {
    throw new Error('Push notifications are not supported');
  }

  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();

  if (!subscription) {
    throw new Error('Not subscribed to push notifications');
  }

  // Update preferences on server
  await fetch('/api/trpc/notifications.updatePreferences', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      endpoint: subscription.endpoint,
      preferences
    })
  });
}

/**
 * Check if user is currently subscribed
 */
export async function isSubscribed(): Promise<boolean> {
  if (!isPushSupported()) {
    return false;
  }

  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();

  return subscription !== null;
}

/**
 * Get current subscription
 */
export async function getCurrentSubscription(): Promise<PushSubscription | null> {
  if (!isPushSupported()) {
    return null;
  }

  const registration = await navigator.serviceWorker.ready;
  return await registration.pushManager.getSubscription();
}

/**
 * Detect device type
 */
function getDeviceType(): 'ios' | 'android' | 'desktop' {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  } else if (/android/.test(userAgent)) {
    return 'android';
  } else {
    return 'desktop';
  }
}

/**
 * Show a test notification (for testing purposes)
 */
export async function showTestNotification(): Promise<void> {
  if (!isPushSupported()) {
    throw new Error('Push notifications are not supported');
  }

  const permission = await requestNotificationPermission();
  if (permission !== 'granted') {
    throw new Error('Notification permission denied');
  }

  const registration = await navigator.serviceWorker.ready;
  
  await registration.showNotification('Thalen Technologies Test Notification', {
    body: 'This is a test notification from Thalen Technologies',
    icon: '/pwa-icon-192.png',
    badge: '/badge.png',
    tag: 'test-notification',
    data: {
      url: '/'
    }
  });
}
