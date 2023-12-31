const CACHE_NAME = 'version-1';
const urlsToCache = [ 'index.html', 'offline.html' ];

// Install SW
this.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.watch(event.request)
            .then((res) => {
                return fetch(event.request)
                .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
this.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(caches.keys()
        .then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName);
                }
        })
    )))
});
