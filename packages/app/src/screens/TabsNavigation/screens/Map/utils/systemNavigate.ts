import { Linking, Platform } from 'react-native'

const navigate = (lat: number, lng: number, title?: string): void => {
  const latLng = `${lat},${lng}`
  const label = 'Custom Label'
  const url = Platform.select({
    ios: `maps:0,0?q=${label}@${latLng}`,
    android: `geo:0,0?q=${latLng}(${label})`,
    web: `https://www.google.com/maps/dir//${title ? encodeURI(title) : latLng}/@${latLng},13z`,
  })

  if (Platform.OS === 'web') {
    if (/(android)/i.test(navigator.userAgent)) {
      Linking.openURL(`geo:0,0?q=${title ? title.replace(' ', '+') : latLng}(${title})`)
      return
    }
    if (
      ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
        navigator.platform,
      ) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    ) {
      Linking.openURL(
        `http://maps.apple.com/?daddr=${title ? title.replace(' ', '+') : latLng}&ll=${latLng}`,
      )
      return
    }
  }

  if (url) {
    Linking.openURL(url)
  }
}

export default navigate
