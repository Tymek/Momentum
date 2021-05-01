import React, { FC } from 'react'

import TextPage from 'components/TextPage'
import Markdown from 'components/Markdown'

const content = `
# Powiadomienia
`

const Notifications: FC = () => (
  <TextPage>
    <Markdown>{content}</Markdown>
  </TextPage>
)

export default Notifications
