import React, { FC } from 'react'
import { View } from 'react-native'
import { createStackNavigator, HeaderBackButton, StackHeaderProps } from '@react-navigation/stack'
import { useLinkTo, useNavigation } from '@react-navigation/native'

import Rules from './screens/Rules'
import About from './screens/About'
import Speakers from './screens/Speakers'
import Speaker, { ParamList as SpeakerParamList } from './screens/Speaker'
import InfoCard from './components/InfoCard'
import {
  TileGrid,
  TileRow,
  TileColumn,
  TileColumnLeft,
  TileColumnRight,
} from './components/TileGrid'
import Header from 'components/Header'
import ErrorBoundary from 'containers/error/Boundary'

export const screens = {
  InfoScreen: '',
  About: 'o-aplikacji',
  Speakers: 'mowcy',
  Speaker: {
    path: 'mowcy/:name',
    parse: {
      name: (name: string): string => decodeURI(name),
    },
    stringify: {
      name: (name: string): string => encodeURI(name),
    },
  },
  Rules: 'regulamin',
}

type InfoStackParamList = {
  InfoScreen: undefined
  About: undefined
  Speakers: undefined
  Rules: undefined
} & SpeakerParamList

const Stack = createStackNavigator<InfoStackParamList>()

const BackButton = () => {
  const linkTo = useLinkTo()
  return <HeaderBackButton canGoBack accessibilityLabel="Powrót" onPress={() => linkTo('/info')} />
}

const SpeakerBackButton = () => {
  const navigation = useNavigation()
  return navigation.canGoBack() ? (
    <HeaderBackButton canGoBack accessibilityLabel="Powrót" onPress={() => navigation.goBack()} />
  ) : null
}

const InformationsScreen: FC = () => (
  <ErrorBoundary>
    <View style={{ flex: 1 }}>
      <TileGrid>
        <TileRow>
          <TileColumn>
            <InfoCard image={require('assets/images/info/speakers.jpg')} link="/info/mowcy">
              Mówcy
            </InfoCard>
          </TileColumn>
        </TileRow>
        <TileRow>
          <TileColumnLeft>
            <InfoCard image={require('assets/images/info/rules.jpg')} link="/info/regulamin">
              Regulamin
            </InfoCard>
          </TileColumnLeft>
          <TileColumnRight>
            <InfoCard image={require('assets/images/info/about-app.jpg')} link="/info/o-aplikacji">
              O aplikacji
            </InfoCard>
          </TileColumnRight>
        </TileRow>
      </TileGrid>
    </View>
  </ErrorBoundary>
)

const EmptyHeader: FC<StackHeaderProps> = () => <Header />

const Informations: FC = () => (
  <Stack.Navigator initialRouteName="InfoScreen">
    <Stack.Screen
      name="InfoScreen"
      component={InformationsScreen}
      options={{ title: 'Informacje', header: EmptyHeader }}
    />
    <Stack.Screen
      name="About"
      component={About}
      options={{ title: 'O aplikacji', headerLeft: BackButton }}
    />
    <Stack.Screen
      name="Speakers"
      component={Speakers}
      options={{ title: 'Mówcy', headerLeft: BackButton }}
    />
    <Stack.Screen
      name="Speaker"
      component={Speaker}
      options={({ route }) => ({
        title: route?.params?.name,
        headerLeft: SpeakerBackButton,
      })}
    />
    <Stack.Screen
      name="Rules"
      component={Rules}
      options={{ title: 'Regulamin', headerLeft: BackButton }}
    />
  </Stack.Navigator>
)

export default Informations
