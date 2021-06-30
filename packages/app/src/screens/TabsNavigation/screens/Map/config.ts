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
    address: 'Wąska 1',
    coordinates: [15.573081926038299, 54.1765437641634],
    type: 'sharp',
    navigation: 'Wąska 1, Kołobrzeg',
  },
  {
    title: 'Nocleg (dziewczyny)',
    address: 'Łopuskiego 15',
    coordinates: [15.5737857, 54.1781537],
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
  {
    title: 'Promenada',
    address: 'Plac przy Molo',
    coordinates: [15.561874, 54.186373],
    navigation: 'Plac przy Molo, bulwar Jana Szymańskiego, Kołobrzeg',
    type: 'umbrella',
  },
  {
    title: 'Dworzec PKP',
    address: 'aleja Kolejowa 3, 78-100 Kołobrzeg',
    coordinates: [15.570096216683197, 54.181902042815665],
    navigation: '54.181954,15.5693778',
    type: 'train',
  },
  {
    title: 'Dworzec Autobusowy',
    address: 'aleja Kolejowa 6, 78-100 Kołobrzeg',
    coordinates: [15.571969272027559, 54.181521375222076],
    navigation: '54.181534,15.5712486',
    type: 'bus',
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
