/**
 * VAPID keys for web push notifications
 * In production, these MUST be set via environment variables.
 */

export const VAPID_KEYS = {
  publicKey: process.env.VAPID_PUBLIC_KEY || '',
  privateKey: process.env.VAPID_PRIVATE_KEY || '',
};

export const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:contact@thalentechnologies.com';
