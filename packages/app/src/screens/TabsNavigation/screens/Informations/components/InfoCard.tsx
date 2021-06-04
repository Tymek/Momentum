import React, { FC } from 'react'
import { ImageBackground, ImageSourcePropType, Pressable } from 'react-native'
import { useLinkTo } from '@react-navigation/native'
import styled, { css } from '@emotion/native'
import Text from 'components/Text'
import config from 'utils/config'

const InfoCard: FC<{ children?: string; image?: ImageSourcePropType; link?: string }> = ({
  children,
  image,
  link = '/info',
}) => {
  const linkTo = useLinkTo()

  const Main = () => (
    <Content>
      <Title>{children}</Title>
    </Content>
  )

  return (
    <StyledPressable onPress={() => linkTo(link)}>
      {({ pressed }) => (
        <Card style={pressed ? { opacity: 0.67 } : {}}>
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
  border: 1px solid rgb(39, 39, 41);
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
  background-color: rgb(39, 39, 41);
  overflow: hidden;

  ${config.isWeb &&
  css`
    cursor: pointer;
  `}
`

const Content = styled.View`
  display: flex;
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.m}px`};
  justify-content: flex-end;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`

const Title = styled(Text)`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.l}px`};
  text-transform: uppercase;
`

export default InfoCard
