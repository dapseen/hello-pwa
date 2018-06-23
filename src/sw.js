var cacheName = 'hello-world-page';
var filesToCache = [
    '/',
    '/index.html',
    '/style.css'
];

self.addEventListener('install', function(e){
    console.log('[ServiceWorker] Install');
    e.waitUntill(
        caches.open(cacheName).then(function(cache){
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate',event => {
    event.waitUntill(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request,{ignoreSearch:true})
        .then(response=>{
            return response || fetch(event.request);
        })
    );
});