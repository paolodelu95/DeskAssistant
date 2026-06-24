// Service Worker minimale - necessario per installazione PWA
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
