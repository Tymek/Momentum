import React, { FC } from 'react'

import Text from 'components/Text'

const messages = {
  unknownError: 'Wystąpił nieznany błąd',
}

type ErrorComponentProps = {
  message?: string
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
  return <Text>{message || messages.unknownError}</Text>
}

export default ErrorComponent
