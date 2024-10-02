const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/blog.html',
    '/paquetes_de_viaje.html',
    '/contacto.html',
    '/css/global.css',
    '/css/index.css',
    '/img/Banner Blog.png',
    '/img/Banner contato.png',
    '/img/Banner Japão.png',
    '/img/Banner Japon.png',
    '/img/ellipse-1@2x.png',
    '/img/Frame 1.png',
    '/img/Frame 2.png',
    '/img/Frame 3.png',
    '/img/Hiroshima.png',
    '/img/Imagem pré rodapé.png',
    '/img/Kyoto.png',
    '/img/logobranco-1@2x.png',
    '/img/logoprovisriablanca-1@2x.png',
    '/img/maldivas@2x.png',
    '/img/Montagem japão 1.png',
    '/img/Montagem japão 2.png',
    '/img/Montagem japão 3 (1).png',
    '/img/Montagem japão 3.png',
    '/img/montaje-japo-1@2x.png',
    '/img/montaje-japo-2@2x.png',
    '/img/montaje-japo-3@2x.png',
    '/img/Osaka 2.0.png',
    '/img/Osaka.png',
    '/img/osaka@2x.png',
    '/img/pre-footer-image.png',
    '/img/san-andreas.png',
    '/img/star-1.png',
    '/img/Tokyo 2.0.png',
    '/img/tokyo.png',
    '/img/tokyo@2x.png',
    '/img/Tokyo2.1.png',
    '/img/twiter-1.svg',
    '/img/whatsapp-1.svg',

];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cacheando archivos');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
