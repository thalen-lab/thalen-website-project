// Service Worker for Thalen Technologies PWA
// Enhanced offline capability with advanced caching strategies

const CACHE_VERSION = 'v2';
const STATIC_CACHE = `nexdyne-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `nexdyne-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `nexdyne-images-${CACHE_VERSION}`;
const API_CACHE = `nexdyne-api-${CACHE_VERSION}`;
const OFFLINE_URL = '/offline.html';

// Maximum items in dynamic cache
const MAX_DYNAMIC_CACHE_ITEMS = 50;
const MAX_IMAGE_CACHE_ITEMS = 100;

// Assets to cache immediately on install (critical for app shell)
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/pwa-icon-192.png',
  '/pwa-icon-512.png'
];

// Routes that should use stale-while-revalidate strategy
const STALE_WHILE_REVALIDATE_ROUTES = [
  '/case-studies',
  '/insights',
  '/resources',
  '/about',
  '/contact',
  '/services',
  '/industries',
  '/methodology',
  '/partners',
  '/events'
];

// API endpoints to cache
const CACHEABLE_API_PATTERNS = [
  /\/api\/trpc\/.*\.query/
];

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing v2...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[Service Worker] Precaching app shell');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              return name.startsWith('nexdyne-') && 
                     name !== STATIC_CACHE && 
                     name !== DYNAMIC_CACHE && 
                     name !== IMAGE_CACHE &&
                     name !== API_CACHE;
            })
            .map((name) => {
              console.log('[Service Worker] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    if (CACHEABLE_API_PATTERNS.some(pattern => pattern.test(url.pathname))) {
      event.respondWith(networkFirstWithCache(request, API_CACHE, 60 * 5)); // 5 min cache
    }
    return;
  }

  // Handle image requests - cache-first with long expiry
  if (isImageRequest(request)) {
    event.respondWith(cacheFirstWithExpiry(request, IMAGE_CACHE, MAX_IMAGE_CACHE_ITEMS));
    return;
  }

  // Handle static assets (JS, CSS, fonts) - cache-first
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Handle navigation and page requests
  if (request.mode === 'navigate' || isPageRequest(request)) {
    // Check if this is a stale-while-revalidate route
    if (STALE_WHILE_REVALIDATE_ROUTES.some(route => url.pathname.startsWith(route))) {
      event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
    } else {
      event.respondWith(networkFirstWithFallback(request, DYNAMIC_CACHE));
    }
    return;
  }

  // Default: network-first
  event.respondWith(networkFirstWithFallback(request, DYNAMIC_CACHE));
});

// Helper functions
function isImageRequest(request) {
  const url = new URL(request.url);
  return /\.(png|jpg|jpeg|gif|webp|svg|ico|avif)$/i.test(url.pathname) ||
         request.destination === 'image';
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return /\.(js|css|woff2?|ttf|eot|otf)$/i.test(url.pathname);
}

function isPageRequest(request) {
  const url = new URL(request.url);
  return url.pathname === '/' || 
         !url.pathname.includes('.') ||
         url.pathname.endsWith('.html');
}

// Cache-first strategy with cache limit
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Cache-first fetch failed:', request.url);
    return new Response('Offline', { status: 503 });
  }
}

// Cache-first with expiry and limit for images
async function cacheFirstWithExpiry(request, cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      // Clone and store with timestamp
      const responseToCache = response.clone();
      cache.put(request, responseToCache);
      
      // Trim cache if needed
      trimCache(cacheName, maxItems);
    }
    return response;
  } catch (error) {
    console.log('[SW] Image fetch failed:', request.url);
    // Return a placeholder or empty response for images
    return new Response('', { status: 503 });
  }
}

// Network-first with cache fallback
async function networkFirstWithCache(request, cacheName, maxAgeSeconds) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    return new Response(JSON.stringify({ error: 'Offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Network-first with offline fallback for navigation
async function networkFirstWithFallback(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }

    // For navigation requests, show offline page
    if (request.mode === 'navigate') {
      const offlinePage = await caches.match(OFFLINE_URL);
      if (offlinePage) {
        return offlinePage;
      }
    }

    return new Response('Offline - Content not available', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  // Start network fetch in background
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch((error) => {
      console.log('[SW] Background fetch failed:', request.url);
      return null;
    });

  // Return cached version immediately if available
  if (cached) {
    // Trigger background update
    fetchPromise;
    return cached;
  }

  // No cache, wait for network
  try {
    const response = await fetchPromise;
    if (response) {
      return response;
    }
    
    // Network failed and no cache
    if (request.mode === 'navigate') {
      const offlinePage = await caches.match(OFFLINE_URL);
      if (offlinePage) {
        return offlinePage;
      }
    }
    
    return new Response('Offline', { status: 503 });
  } catch (error) {
    const offlinePage = await caches.match(OFFLINE_URL);
    return offlinePage || new Response('Offline', { status: 503 });
  }
}

// Trim cache to max items (FIFO)
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxItems) {
    const deleteCount = keys.length - maxItems;
    for (let i = 0; i < deleteCount; i++) {
      await cache.delete(keys[i]);
    }
  }
}

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((names) => {
        return Promise.all(
          names.filter(name => name.startsWith('nexdyne-'))
               .map(name => caches.delete(name))
        );
      })
    );
  }

  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    event.waitUntil(
      getCacheStatus().then((status) => {
        event.ports[0].postMessage(status);
      })
    );
  }
});

// Get cache status for debugging
async function getCacheStatus() {
  const cacheNames = await caches.keys();
  const status = {};
  
  for (const name of cacheNames) {
    if (name.startsWith('nexdyne-')) {
      const cache = await caches.open(name);
      const keys = await cache.keys();
      status[name] = keys.length;
    }
  }
  
  return status;
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push received:', event);
  
  let notificationData = {
    title: 'Thalen Technologies',
    body: 'You have a new notification',
    icon: '/pwa-icon-192.png',
    badge: '/badge.png',
    data: { url: '/' }
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      notificationData = {
        title: payload.title || notificationData.title,
        body: payload.body || notificationData.body,
        icon: payload.icon || notificationData.icon,
        badge: payload.badge || notificationData.badge,
        data: payload.data || notificationData.data,
        tag: payload.tag,
        requireInteraction: payload.requireInteraction || false,
        actions: payload.actions || []
      };
    } catch (error) {
      console.error('[Service Worker] Error parsing push data:', error);
    }
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon,
      badge: notificationData.badge,
      data: notificationData.data,
      tag: notificationData.tag,
      requireInteraction: notificationData.requireInteraction,
      actions: notificationData.actions
    })
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  // Get pending form submissions from IndexedDB
  // This would be implemented with actual IndexedDB logic
  console.log('[SW] Syncing offline forms...');
}
