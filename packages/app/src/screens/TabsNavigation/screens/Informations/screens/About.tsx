import React, { FC } from 'react'
import Constants from 'expo-constants'
import packageJson from '../../../../../../package.json'

import TextPage from 'components/TextPage'
import Markdown from 'components/Markdown'

const about = `
# Autor

Scroll-Lock &ndash; Tymoteusz Czech

# Wersja
**v${Constants?.manifest?.version}**

Platforma: _${JSON.stringify(Constants?.platform)}_
SDK: _${Constants?.manifest?.sdkVersion}_

# Użyte biblioteki:
_${Object.keys(packageJson.dependencies)
  .filter((dependency) => !/@-local\//.test(dependency))
  .join(', ')}_
`

const About: FC = () => (
  <TextPage>
    <Markdown>{about}</Markdown>
  </TextPage>
)

export default About
