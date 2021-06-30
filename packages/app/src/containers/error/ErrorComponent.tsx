import React, { FC } from 'react'
import { Button, Platform } from 'react-native'
import { useTheme } from '@emotion/react'
import styled from '@emotion/native'

import Markdown from 'components/Markdown'
import TextPage from 'components/TextPage'

// const messages = {
//   unknownError: 'Wystąpił nieznany błąd',
// }

type ErrorComponentProps = {
  message?: string
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
  const theme = useTheme()
  const text = `
# Wystąpił błąd 🥺
Coś jest nie tak po naszej stronie.
`
  console.error('error', message)
  // ## _${message && typeof message === 'string' ? message : messages.unknownError}_

  return (
    <TextPage>
      <Markdown>{text}</Markdown>
      {Platform.OS === 'web' && (
        <ButtonView>
          <Button
            color={theme.color.primary}
            onPress={() => {
              window?.location.reload()
              return false
            }}
            title="Załaduj ponownie"
          />
        </ButtonView>
      )}
    </TextPage>
  )
}

const ButtonView = styled.View`
  margin: ${({ theme }) => `${theme.spacing.m}px auto`};
`

export default ErrorComponent
