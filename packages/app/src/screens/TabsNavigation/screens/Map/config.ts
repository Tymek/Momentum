import { MarkerProps } from './components/Marker'

type Marker = {
  title: string
  address: string
  coordinates: [number, number]
  type?: MarkerProps['type']
  navigation?: string
}

const markers: Marker[] = [
  {
    title: 'Hala Milenium',
    address: 'Łopuskiego 36',
    coordinates: [15.566196149763755, 54.174898438222186],
    navigation: 'Hala Millenium, Łopuskiego 36, Kołobrzeg',
  },
  {
    title: 'Hala Łuczniczka',
    address: 'Łopuskiego 38',
    coordinates: [15.564976884412317, 54.175569618423026],
    navigation: 'Hala Łuczniczka, Łopuskiego 38, Kołobrzeg',
  },
  {
    title: 'Nocleg (chłopaki)',
    address: 'Wąska 5',
    coordinates: [15.573081926038299, 54.1765437641634],
    type: 'sharp',
    navigation: 'Wąska 5, Kołobrzeg',
  },
  {
    title: 'Nocleg (dziewczyny)',
    address: 'Łopuskiego 15',
    coordinates: [15.5744857, 54.1784437],
    navigation: 'Łopuskiego 15, Kołobrzeg',
    type: 'sharp',
  },
  {
    title: 'Plaża Zachodnia - Koncert',
    address: 'ul. Arciszewskiego',
    coordinates: [15.5375125, 54.1792386],
    navigation: '54.179019,15.5368783',
    type: 'outline',
  },
]

const config = {
  // center: [15.566, 54.1775],
  center: [15.57, 54.1775],
  // zoom: 15.5,
  zoom: 13.5,
  pitch: 60,
  heading: 0,
  styleUrl: 'mapbox://styles/tymek/ckp8pqrww0dpt17pkgjpk2u68',
  darkStyleUrl: 'mapbox://styles/tymek/ckp9ykqlc2nno17o17cmqfwg6',
  markers,
  minZoom: 11,
}

export default config
