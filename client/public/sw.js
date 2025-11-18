// Service Worker for NexDyne PWA
// Provides offline capability and caching for resources and case studies

const CACHE_NAME = 'nexdyne-v1';
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/pwa-icon-192.png',
  '/pwa-icon-512.png'
];

// Routes to cache with network-first strategy (dynamic content)
const NETWORK_FIRST_ROUTES = [
  '/case-studies',
  '/resources',
  '/insights',
  '/about',
  '/contact'
];

// Routes to cache with cache-first strategy (static content)
const CACHE_FIRST_PATTERNS = [
  /\.(js|css|woff2?|ttf|eot)$/,
  /\.(png|jpg|jpeg|svg|gif|webp|ico)$/
];

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Precaching assets');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
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

  // Skip cross-origin requests (except for fonts/images)
  if (url.origin !== location.origin && !request.url.match(/\.(woff2?|ttf|eot|png|jpg|jpeg|svg|gif|webp)$/)) {
    return;
  }

  // Cache-first strategy for static assets
  if (CACHE_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Network-first strategy for dynamic content (case studies, resources, insights)
  if (NETWORK_FIRST_ROUTES.some(route => url.pathname.startsWith(route)) || 
      url.pathname.match(/\/(case-studies|resources|insights)\//)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Default: network-first with offline fallback
  event.respondWith(networkFirst(request));
});

// Cache-first strategy: Try cache, fall back to network
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    console.log('[Service Worker] Cache hit:', request.url);
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[Service Worker] Fetch failed:', request.url);
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

// Network-first strategy: Try network, fall back to cache, then offline page
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    if (response.ok) {
      // Cache successful responses
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[Service Worker] Network failed, trying cache:', request.url);
    
    // Try cache
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }

    // If it's a navigation request and we have no cache, show offline page
    if (request.mode === 'navigate') {
      const offlinePage = await cache.match(OFFLINE_URL);
      if (offlinePage) {
        return offlinePage;
      }
    }

    // Last resort: generic offline response
    return new Response('Offline - Content not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });
  }
}

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }
});
