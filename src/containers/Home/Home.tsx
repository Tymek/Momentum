import styled from '@emotion/native'
import React, { FC } from 'react'
import { Text } from 'react-native'

const Header = styled.View`
  background: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.lg};
`

const Logo = styled.Image`
  width: 182px;
  height: 125px;
`

const Main = styled.View`
  padding: ${({ theme }) => theme.spacing.lg};
`

const HomeScreen: FC = () => (
  <>
    <Header>
      <Logo
        source={require('../../../assets/images/logo.png')}
        resizeMode="contain"
      />
    </Header>
    <Main>
      <Text>12-17 Lipca 2021</Text>
      <Text>Kołobrzeg</Text>
    </Main>
  </>
)

export default HomeScreen
