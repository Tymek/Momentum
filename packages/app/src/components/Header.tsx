import React, { FC } from 'react'
import Constants from 'expo-constants'
import styled from '@emotion/native'

import Text from 'components/Text'
import useShadow from 'hooks/useShadow'

type HeaderProps = {
  children?: string | number | JSX.Element
}

const Header: FC<HeaderProps> = ({ children }) => {
  const shadow = useShadow(3)
  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <TitleText>{`${children}`}</TitleText>
    ) : (
      children
    )

  return (
    <Background style={[shadow, {}]}>
      <StatusBarSpacing />
      {children && <Wrapper>{content}</Wrapper>}
    </Background>
  )
}

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
