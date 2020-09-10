const CACHE_NAME = "ara-web-v1.5"
const assets = [
    "/",
    "/index.html",
    "/app.js",
    "/resources/js/bootstrap4/offcanvas.js",
    "/resources/images/icon/apple-icon-57x57.png",
    "/resources/images/icon/apple-icon-60x60.png",
    "/resources/images/icon/apple-icon-72x72.png",
    "/resources/images/icon/apple-icon-76x76.png",
    "/resources/images/icon/apple-icon-114x114.png",
    "/resources/images/icon/apple-icon-120x120.png",
    "/resources/images/icon/apple-icon-144x144.png",
    "/resources/images/icon/apple-icon-152x152.png",
    "/resources/images/icon/apple-icon-180x180.png",
    "/resources/images/icon/android-icon-192x192.png",
    "/resources/images/icon/favicon-32x32.png",
    "/resources/images/icon/favicon-96x96.png",
    "/resources/images/icon/favicon-16x16.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(assets);
        })
    )
});

// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then(res => {
//             return res || fetch(fetchEvent.request)
//         })
//     )
// })

// Cache Strategy
// https://blog.bitsrc.io/5-service-worker-caching-strategies-for-your-next-pwa-app-58539f156f52

// Cache First, then Network - Strategy
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                cache.match(event.request)
                    .then( function(cacheResponse) {
                        if(cacheResponse)
                            return cacheResponse
                        else
                            return fetch(event.request)
                                .then(function(networkResponse) {
                                    cache.put(event.request, networkResponse.clone())
                                    return networkResponse
                                })
                    })
            })
    )
});

// Network First, then Cache - Strategy
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         fetch(event.request).catch(function() {
//             return caches.match(event.request);
//         })
//     )
// })

// Cache Only - Strategy
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.open(cacheName).then(function(cache) {
//             cache.match(event.request).then(function(cacheResponse) {
//                 return cacheResponse;
//             })
//         })
//     )
// })

// Network Only - Strategy
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         fetch(event.request).then(function(networkResponse) {
//             return networkResponse
//         })
//     )
// })

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
// CODELAB: Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});