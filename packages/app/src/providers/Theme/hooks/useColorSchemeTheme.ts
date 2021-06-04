import useDarkTheme from 'hooks/useDarkTheme'
import theme, { darkTheme } from 'utils/theme'

const useColorSchemeTheme = (): typeof theme => {
  const isDarkTheme = useDarkTheme()

  return isDarkTheme ? darkTheme : theme
}

export default useColorSchemeTheme
