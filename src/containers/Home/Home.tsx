import styled from '@emotion/native'
import React, { FC } from 'react'
import Text from 'components/Text'
import Constants from 'expo-constants'
import { View } from 'react-native'

const Header = styled.View`
  top: ${Constants.statusBarHeight}px;
  /* top: 24px; */
  background: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.lg};
`

const Title = styled(Text)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.background};
  font-size: 42px;
`

const Logo = styled.Image`
  width: 91px;
  height: 62px;
`

const Main = styled.View`
  padding: ${({ theme }) => theme.spacing.lg};
`

const HomeScreen: FC = () => (
  <View style={{ paddingTop: Constants.statusBarHeight }}>
    <Header>
      <Logo
        source={require('../../../assets/images/logo.png')}
        resizeMode="contain"
      />
      <Title fontWeight="bold">Freedom</Title>
    </Header>
    <Main>
      <Text>12-17 Lipca 2021</Text>
      <Text>Kołobrzeg</Text>
    </Main>
  </View>
)

export default HomeScreen
