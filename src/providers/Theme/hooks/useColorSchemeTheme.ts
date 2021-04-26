import { useColorScheme } from 'react-native'
import theme, { darkTheme } from 'utils/theme'

const useColorSchemeTheme = (): typeof theme => {
  const colorScheme = useColorScheme()
  return colorScheme === 'dark' ? darkTheme : theme
}

export default useColorSchemeTheme
