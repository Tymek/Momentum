import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from '@emotion/native'

import { ScreenList } from 'config/routes'
import Text from 'components/Text'

const messages = {
  title: '404 – Ten ekran nie istnieje.',
  action: '🔙 Wróć do aplikacji',
}

const NotFoundScreen: FC<StackScreenProps<ScreenList, 'NotFound'>> = ({ navigation }) => {
  return (
    <Container>
      <Title>{messages.title}</Title>
      <Link onPress={() => navigation.replace('Root')}>
        <LinkText>{messages.action}</LinkText>
      </Link>
    </Container>
  )
}

export default NotFoundScreen

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Title = styled(Text)`
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.l}px`};
  text-transform: uppercase;
`

const Link = styled.TouchableOpacity`
  margin-top: 15px;
  padding: 15px 0;
`

const LinkText = styled(Text)`
  color: ${({ theme }) => theme.color.primary};
`
