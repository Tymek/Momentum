interface GlobalEventHandlersEventMap {
  acceptUpdate: CustomEvent<{ version?: number | string }>
  update: CustomEvent<{ version?: number | string }>
}

interface Window {
  _paq: Array<Array<string | number>> // Matomo Analytics
}
