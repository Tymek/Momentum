import React, { FC } from 'react'
import Constants from 'expo-constants'
import styled from '@emotion/native'
import { StyleSheet } from 'react-native'

import Text from 'components/Text'

type HeaderProps = {
  children?: string | number | JSX.Element
}

const Header: FC<HeaderProps> = ({ children }) => {
  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <TitleText>{`${children}`}</TitleText>
    ) : (
      children
    )

  return (
    <Background style={[styles.container, {}]}>
      <StatusBarSpacing />
      {children && <Wrapper>{content}</Wrapper>}
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
})

const Background = styled.View`
  background: ${({ theme }) => theme.header.background};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.header.border};
  /* border-bottom: ${({ theme }) => `1px solid ${theme.header.border}`}; */
`

const StatusBarSpacing = styled.View`
  height: ${`${Constants.statusBarHeight ? Constants.statusBarHeight + 1 : 0}px`};
`

const Wrapper = styled.View`
  padding: ${({ theme }) => `${theme.spacing.s}px ${theme.spacing.m}px`};
`

const TitleText = styled(Text)`
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.l}px`};
  text-align: center;
`

export default Header
