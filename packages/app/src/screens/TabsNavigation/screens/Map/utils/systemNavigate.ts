import { Linking, Platform } from 'react-native'

const navigate = (lat: number, lng: number, title?: string): void => {
  const latLng = `${lat},${lng}`
  const label = 'Custom Label'
  const url = Platform.select({
    ios: `maps:0,0?q=${label}@${latLng}`,
    android: `geo:0,0?q=${latLng}(${label})`,
    web: `https://www.google.com/maps/dir//${title ? encodeURI(title) : latLng}/@${latLng},13z`,
  })

  if (url) {
    Linking.openURL(url)
  }
}

export default navigate
