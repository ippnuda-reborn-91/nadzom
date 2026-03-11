const CACHE_NAME = 'nadzom-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Nadzom%20luru%20ilmu.mp3' // Ganti dengan nama file MP3 yang Bapak upload tadi
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
