/* eslint-env browser */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    if (window.location.pathname.startsWith('/panel')) {
      let reload = false
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister()
          reload = true
        }
      })
      if (reload) {
        window.location.reload()
      }
      return
    }

    navigator.serviceWorker
      .register('SW_PUBLIC_URL/expo-service-worker.js', { scope: 'SW_PUBLIC_SCOPE' })
      .then(function (info) {
        console.info('Registered service-worker', info)

        if (window.location.pathname.startsWith('/panel')) {
          info.unregister()
          window.location.reload()
        }
      })
      .catch(function (error) {
        console.info('Failed to register service-worker', error)
      })
  })
}
