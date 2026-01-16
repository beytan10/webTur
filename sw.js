if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/webTur/sw.js', { scope: '/webTur/' })
    .then(reg => console.log('SW registrado en scope: webTur'))
    .catch(err => console.log('Error:', err));
}
