import React, { FC } from 'react'
import { useLinkTo } from '@react-navigation/native'
import styled from '@emotion/native'

import Button from 'components/Button'
import Text from 'components/Text'
import routes from 'utils/routes'

const messages = {
  rules: 'Regulamin',
}

const Title = styled(Text)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.headers};
  font-size: 42px;
`

const Main = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
`

const Footer = styled.View`
  padding: ${({ theme }) => theme.spacing.md};
`

const HomeScreen: FC = () => {
  const linkTo = useLinkTo()

  return (
    <>
      <Main>
        <Title>Freedom</Title>
        <Text>12-17 Lipca 2021</Text>
        <Text>Kołobrzeg</Text>
      </Main>
      <Footer>
        <Button title={messages.rules} onPress={() => linkTo(routes.Rules)} />
      </Footer>
    </>
  )
}

export default HomeScreen
