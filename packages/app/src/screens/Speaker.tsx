import styled from '@emotion/native'
import React, { FC } from 'react'
import Text from 'components/Text'
import { Dimensions, ImageSourcePropType, SafeAreaView, ScrollView, View } from 'react-native'

type SpeakerProps = {
  name?: string
  description?: string
  image?: ImageSourcePropType
}

const Layout = styled.View`
  flex: 1;
`

const Header = styled.View`
  height: 20%;
  background: ${({ theme }) => theme.color.text};
  padding: ${({ theme }) => `${theme.spacing.l}px`};
  justify-content: center;
`

const Title = styled(Text)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.background};
  font-size: 42px;
`

const Photo = styled.Image`
  position: absolute;
  width: 100%;
  height: 80%;
`

const Main = styled.View`
  padding: ${({ theme }) => `${theme.spacing.l}px`};
  background: ${({ theme }) => theme.color.background};
`

const { height } = Dimensions.get('window')

const SpeakerScreen: FC<SpeakerProps> = ({ name, description, image }) => (
  <Layout>
    {image && <Photo source={image} />}
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: height - 42, flexDirection: 'column-reverse' }}>
          <Header>
            <Title>{name}</Title>
          </Header>
        </View>
        <Main>
          <Text style={{ fontSize: 20 }}>{description}</Text>
          <Text style={{ fontSize: 48, textTransform: 'uppercase', marginTop: 24 }}>Sesje</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
          <Text style={{ fontSize: 20 }}>&mdash; Test</Text>
        </Main>
      </ScrollView>
    </SafeAreaView>
  </Layout>
)

export default SpeakerScreen
