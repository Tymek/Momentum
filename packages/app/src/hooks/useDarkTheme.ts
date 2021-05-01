import { useColorScheme } from 'react-native'

const useDarkTheme = (): boolean => {
  const scheme = useColorScheme()

  return scheme === 'dark'
}

export default useDarkTheme
