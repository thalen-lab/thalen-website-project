export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/thalen-logo.png";

/**
 * VAPID public key for web push notifications
 * This key is safe to expose in client-side code
 */
export const VAPID_PUBLIC_KEY = 'BJZOyfhGVrNIjrT9TxHmXm0HvQaG5lQWSvphfkuND5bX0oPYO_DPcT5rNqIBDRSSpkYz1Inn-oLqSlO5dkWIFiU';

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
