const CACHE_NAME = 'dizionatore-cache-v2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './',
        './manifest.json'
        // RIMUOVI './index.html' dalla cache!
      ]);
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', e => {
  // Se la richiesta è per index.html, prendi SEMPRE dalla rete
  if (e.request.mode === 'navigate' || e.request.url.endsWith('index.html')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // Altrimenti usa la cache
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
