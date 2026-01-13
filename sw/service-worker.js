// Versão do cache - INCREMENTE ESTE NÚMERO quando fizer atualizações importantes
const CACHE_VERSION = 'v2';
const CACHE_NAME = `english365-${CACHE_VERSION}`;
const urlsToCache = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  // Força a ativação imediata do novo service worker
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache aberto -', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Service Worker: Erro ao cachear arquivos:', error);
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativando...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Remove todos os caches antigos que não correspondem à versão atual
          if (cacheName !== CACHE_NAME && cacheName.startsWith('english365-')) {
            console.log('Service Worker: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Força o controle imediato de todas as páginas
      return self.clients.claim();
    })
  );
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  // Ignorar requisições que não são GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Estratégia: Network First, depois Cache
        // Isso garante que atualizações sejam sempre buscadas primeiro
        return fetch(event.request)
          .then((networkResponse) => {
            // Verificar se a resposta é válida
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              // Se a rede falhar, usar cache se disponível
              return cachedResponse || networkResponse;
            }

            // Clonar a resposta para cache
            const responseToCache = networkResponse.clone();

            // Atualizar cache com nova versão
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch(() => {
            // Se a rede falhar completamente, usar cache
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // Se for navegação e não houver cache, retornar index.html
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
