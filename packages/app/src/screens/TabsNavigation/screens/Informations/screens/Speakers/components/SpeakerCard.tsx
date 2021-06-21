import React, { FC } from 'react'
import { Image, ImageBackground } from 'react-native'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'

import { Speaker } from '@-local/db/lib/api'
import Text from 'components/Text'
import useDarkTheme from 'hooks/useDarkTheme'
import useShadow from 'hooks/useShadow'
import speakerImages from 'utils/speakerImages'

const SpeakerCard: FC<Pick<Speaker, 'name' | 'description' | 'image'>> = ({ name, image }) => {
  const isDark = useDarkTheme()
  const theme = useTheme()
  const shadow = useShadow(2)
  const navigation = useNavigation()
  const onPress = () =>
    navigation.navigate('Root', {
      screen: 'Info',
      params: {
        screen: 'Speaker',
        params: {
          name,
        },
      },
    })

  return (
    <Wrapper>
      <Card style={shadow} onPress={onPress}>
        <ImageBackground source={require('assets/images/broken_noise.png')} style={{}}>
          <Content style={!isDark ? { backgroundColor: theme.color.light } : {}}>
            <Photo
              source={
                image && Object.keys(speakerImages).includes(image)
                  ? speakerImages[image as keyof typeof speakerImages]
                  : speakerImages.placeholder
              }
              style={{ height: 200, width: 600 }}
            />
            <TitleBlock>
              <Title>{name}</Title>
            </TitleBlock>
          </Content>
        </ImageBackground>
      </Card>
    </Wrapper>
  )
}

const Photo = styled(Image)`
  max-width: 100%;
`

const Title = styled(Text)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.s}px`};
`

const TitleBlock = styled.View`
  padding-top: ${({ theme }) => `${theme.spacing.s}px`};
  min-height: 48px;
`

const Wrapper = styled.View`
  width: 50%;
  max-width: 320px;
  padding: ${({ theme }) => `${theme.spacing.m / 2}px`};
`

const Card = styled.TouchableOpacity`
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
  overflow: hidden;
`

const Content = styled.View`
  padding: ${({ theme }) => `${theme.spacing.s}px`};
`

export default SpeakerCard
