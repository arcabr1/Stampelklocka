self.addEventListener('install', function(event) {    
    event.waitUntil(    
        caches.open('stampelklocka-cache').then(function(cache) {    
            return cache.addAll([    
                './stampelklocka.html',    
                './manifest.json'    
                // Lägg till fler filer här om du har bilder eller CSS    
            ]);    
        })    
    );    
});    
    
self.addEventListener('fetch', function(event) {    
    event.respondWith(    
        caches.match(event.request).then(function(response) {    
            return response || fetch(event.request);    
        })    
    );    
});    