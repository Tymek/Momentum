import React, { FC } from 'react'

import TextPage from 'components/TextPage'
import Markdown from 'components/Markdown'

const about = `
# Do uzupełnienia

Teksty będą dostępne w kolejnych wersjach aplikacji.
`

const Lyrics: FC = () => (
  <TextPage>
    <Markdown>{about}</Markdown>
  </TextPage>
)

export default Lyrics
