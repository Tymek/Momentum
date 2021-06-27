import React, { FC } from 'react'
import { ImageBackground, ImageSourcePropType, Pressable } from 'react-native'
import { useLinkTo } from '@react-navigation/native'
import styled, { css } from '@emotion/native'
import Text from 'components/Text'
import config from 'utils/config'
import useShadow from 'hooks/useShadow'

const InfoCard: FC<{ children?: string; image?: ImageSourcePropType; link?: string }> = ({
  children,
  image,
  link = '/info',
}) => {
  const linkTo = useLinkTo()
  const shadow = useShadow(3)

  const Main = () => (
    <Content>
      <Title>{children}</Title>
    </Content>
  )

  return (
    <StyledPressable onPress={() => linkTo(link)}>
      {({ pressed }) => (
        <Card style={[pressed ? { opacity: 0.67, marginBottom: -1, marginTop: 1 } : {}, shadow]}>
          {image ? (
            <ImageBackground source={image} style={{ flex: 1 }}>
              <Main />
            </ImageBackground>
          ) : (
            <Main />
          )}
        </Card>
      )}
    </StyledPressable>
  )
}

const StyledPressable = styled(Pressable)`
  display: flex;
  flex: 1;
`

const Card = styled.View`
  display: flex;
  flex: 1;
  border-radius: ${({ theme }) => `${theme.borderRadius.l}px`};
  background-color: ${({ theme }) => theme.color.background};
  overflow: hidden;

  ${config.isWeb &&
  css`
    cursor: pointer;
  `}
`

const Content = styled.View`
  display: flex;
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.s}px`};
  justify-content: flex-end;
  align-items: flex-end;
`

const Title = styled(Text)`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.m}px`};
  text-transform: uppercase;
`

export default InfoCard
