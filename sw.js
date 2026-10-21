const CACHE_NAME = 'photo-tracker-shell-v7-workspace';
const SHELL_ASSETS = ['./', './index.html', './app.js', './manifest.json', './icon.svg',
  './workspace/runtime.js', './workspace/bridge.js', './workspace/workspace.css',
  './workspace/start.mjs', './workspace/integration.mjs', './workspace/adapter.mjs', './workspace/model.mjs',
  './workspace/shell.html', './workspace/styles.css', './workspace/embedded.css'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(SHELL_ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const isShellAsset = SHELL_ASSETS.some(asset => {
      const assetUrl = new URL(asset, self.location.href);
      return assetUrl.pathname === url.pathname;
    });
    if (event.request.mode === 'navigate' || isShellAsset) {
      try {
        const fresh = await fetch(event.request);
        if (!fresh.ok) throw new Error('Shell unavailable');
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, fresh.clone());
        return fresh;
      } catch(e) {
        const cached = await caches.match(event.request);
        return cached || (event.request.mode === 'navigate' ? await caches.match('./index.html') : null) || Response.error();
      }
    }
    const cached = await caches.match(event.request);
    if (cached) return cached;
    const response = await fetch(event.request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(event.request, response.clone());
    return response;
  })());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const clientsList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (clientsList.length > 0) {
      await clientsList[0].focus();
      return;
    }
    await self.clients.openWindow('./index.html');
  })());
});
