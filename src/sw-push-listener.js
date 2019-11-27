'use strict';

self.addEventListener('install', () => {
  console.log('[serviceWorker] installed');
});

self.addEventListener('push', event => {
  if (event.data) {
    try {
      const data = event.data.json();
      if (typeof data.title !== 'unknown') {
        const promiseChain = self.registration.showNotification(data.title, { body: data.body });
        event.waitUntil(promiseChain);
      } else {
        throw Error('invalid data');
      }
    } catch (err) {
      console.log('[serviceWorker] Error: ', err);
    }
  }
});
