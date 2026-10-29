const CACHE = 'schetchik-v11';
const ASSETS = [
  './', './index.html', './styles.css?v=11', './app.js?v=11', './manifest.webmanifest?v=11',
  './icon.svg', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  // Каждый файл кладём отдельно: если какого-то нет, остальные всё равно сохранятся
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

self.addEventListener('message', event => { if (event.data === 'SKIP_WAITING') self.skipWaiting(); });

// «Сначала сеть, потом кэш»: свежая версия приходит сразу, офлайн работает из кэша.
// Запросы к облаку (другой домен) и не-GET запросы кэш не трогает.
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok && response.type === 'basic') { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(request, copy)); }
        return response;
      })
      .catch(() => caches.match(request, { ignoreSearch: request.mode === 'navigate' })
        .then(cached => cached || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
