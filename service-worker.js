const CACHE = 'schetchik-v8';
const ASSETS = ['./', './index.html', './styles.css?v=8', './app.js?v=8', './manifest.webmanifest?v=8', './icon.svg'];

self.addEventListener('install', event => {
  // Каждый файл кладём отдельно: если одного нет, остальные всё равно закэшируются
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.all(ASSETS.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// «Сначала сеть, потом кэш»: свежая версия приходит сразу, а офлайн работает из кэша
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(request, copy)); }
        return response;
      })
      .catch(() => caches.match(request).then(cached => cached || (request.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
