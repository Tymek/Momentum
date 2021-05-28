import React, { FC } from 'react'
import Markdown from 'react-native-markdown-display'
import Constants from 'expo-constants'

import TextPage from 'components/TextPage'

const messages = {
  unknownError: 'Wystąpił nieznany błąd',
}

type ErrorComponentProps = {
  message?: string
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
  return (
    <TextPage>
      <Markdown>
        {message && typeof message === 'string' ? message : messages.unknownError}
      </Markdown>
      <Markdown>{JSON.stringify(Constants.manifest, null, 2)}</Markdown>
    </TextPage>
  )
}

export default ErrorComponent
