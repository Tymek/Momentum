import React, { FC } from 'react'
import Constants from 'expo-constants'
import packageJson from '../../../../../../package.json'

import TextPage from 'components/TextPage'
import Markdown from 'components/Markdown'
import config from 'utils/config'
import { Platform } from 'react-native'

let os = ''
switch (Platform.OS) {
  case 'web':
    os = 'Web'
    break
  case 'android':
    os = 'Android'
    break
  case 'ios':
    os = 'iOS'
    break
  default:
    os = Platform.OS
}

const about = `
# Autor

Scroll-Lock &ndash; Tymoteusz Czech

# Wersja
**v${Constants?.manifest?.version}** ${os} (SDK ${Constants?.manifest?.sdkVersion})

# Użyte biblioteki:
_${Object.keys(packageJson.dependencies)
  .filter((dependency) => !/@-local\//.test(dependency))
  .join(', ')}_

${
  __DEV__
    ? `
# CONFIG
${JSON.stringify(config, null, 2)}

# DEVICE
${JSON.stringify(Platform, null, 2)}
`
    : ''
}
`

const About: FC = () => (
  <TextPage>
    <Markdown>{about}</Markdown>
  </TextPage>
)

export default About
