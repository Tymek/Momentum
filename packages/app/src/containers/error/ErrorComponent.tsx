import React, { FC } from 'react'
import Markdown from 'components/Markdown'

import TextPage from 'components/TextPage'

const messages = {
  unknownError: 'Wystąpił nieznany błąd',
}

type ErrorComponentProps = {
  message?: string
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
  const text = `
# Wystąpił błąd 🥺
Coś jest nie tak po naszej stronie.

## _${message && typeof message === 'string' ? message : messages.unknownError}_
`

  return (
    <TextPage>
      <Markdown>{text}</Markdown>
    </TextPage>
  )
}

export default ErrorComponent
