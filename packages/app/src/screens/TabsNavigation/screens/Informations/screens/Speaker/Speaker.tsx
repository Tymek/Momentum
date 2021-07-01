import styled from '@emotion/native'
import React, { FC, useMemo, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FullLoader as Loader } from 'components/Loader'
import Text from 'components/Text'
import { Dimensions, ScrollView, View } from 'react-native'
import { useGetSpeakersQuery } from '@-local/db/lib/api'
import speakerImages from 'utils/speakerImages'
import SpeakerSessions from './components/SpeakerSessions'

export type ParamList = {
  Speaker: { name: string }
}

type SpeakerScreenRouteProp = RouteProp<ParamList, 'Speaker'>

type SpeakerScreenNavigationProp = StackNavigationProp<ParamList, 'Speaker'>

type SpeakerProps = {
  route: SpeakerScreenRouteProp
  navigation: SpeakerScreenNavigationProp
}

const { width: windowWidth } = Dimensions.get('window')

const SpeakerScreen: FC<SpeakerProps> = ({ route, navigation }) => {
  const [imageHeight, setImageHeight] = useState<number>(windowWidth)
  const { data, loading, error } = useGetSpeakersQuery()
  const { id, name, image, description } =
    useMemo(
      () => data?.speaker?.find(({ name }) => name === route.params.name.replace(/_/g, ' ')),
      [data, route],
    ) || {}

  if (loading) return <Loader />
  if (error || !data) throw error

  if (!name && route.params.name.includes('%20')) {
    // TODO: issue with React Navigation on web refresh
    navigation.navigate('Speaker', {
      name: decodeURI(route.params.name),
    })
  }

  return (
    <Layout
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout
        if (height > width) {
          setImageHeight(width)
        } else {
          setImageHeight(height * 0.67)
        }
      }}
    >
      {image && (
        <Photo
          source={
            image && Object.keys(speakerImages).includes(image)
              ? speakerImages[image as keyof typeof speakerImages]
              : speakerImages.placeholder
          }
          style={{ height: imageHeight }}
        />
      )}

      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ height: imageHeight }} />
          <Main>
            <Description>{description}</Description>
            {id && <SpeakerSessions id={id} />}
          </Main>
        </ScrollView>
      </View>
    </Layout>
  )
}

const Layout = styled.View`
  flex: 1;
  max-width: 768px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.background};
`

const Photo = styled.Image`
  position: absolute;
  width: 100%;
  height: 67%;
`

const Main = styled.View`
  padding: ${({ theme }) => `${theme.spacing.l}px`};
  background: ${({ theme }) => theme.color.background};
`

const Description = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.m}px`};
`

export default SpeakerScreen
