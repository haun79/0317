const CACHE_NAME = 'soccer-game-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './u_yl4sq8d6xg-ghibli-style-2-229070.mp3',
  './peekaboolabcreative-11l-victory_sound_with_t-1749487409696-357609.mp3',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
