import React, { FC } from 'react'
import { View } from 'react-native'
// import Constants from 'expo-constants'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import TextPage from 'components/TextPage'
import Markdown from 'components/Markdown'

const schedule = [
  {
    title: 'Poniedziałek',
    content: `
12.00 - REJESTRACJA
20.00 - SESJA WIECZORNA
22.30 - FUN NIGHT
    `,
  },
  {
    title: 'Wtorek',
    content: `
8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od strachu i oceny. Wolność od pułapki oczekiwań.
  Maria Marszałek- Łuczniczka
- Wolność do bycia człowiekiem, który wnosi błogosławieństwo, a nie hejt.
  Kuba Kuzynin - Staff Room
- Wolność w relacjach. Czyste źródło.
  Jak budować zdrowy związek, relację, małżeństwo?
  Kasia i Ryszard Augustyniak - Sala Główna
    `,
  },
  {
    title: 'Środa',
    content: `
8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od depresji, smutku.
Gosia Bieniaszewska - Sala Główna
- Wolność do bycia tam, gdzie Kościół boi się wyjść.
Ania Greenwood - Staff Room
- Wolność w relacjach. Wolne Serce.
Jak być wolnym i przebaczać duże i małe sprawy?
Gosia i Dominik Tomaszewscy - Łuczniczka

13.30 - STREFA CHILL & BE ACTIVE
17.00 - MOMENTUM W AKCJI
20.00 - SESJA WIECZORNA
22.30 - FUN NIGHT
    `,
  },
  {
    title: 'Czwartek',
    sessions: [
      {
        time: '8:00',
        title: 'Modlitwa',
      },
      {
        time: '10:00',
        title: 'Sesja poranna',
      },
      {
        time: '12:00',
        title: 'Equip',
        topics: [
          {
            title: 'Wolność od zniewoleń',
            speakers: [
              {
                title: 'Zbyszek Zarożny',
              },
            ],
            location: 'Sala Główna',
          },
          {
            title: 'Wolność do wykorzystania 100% swojego potencjału',
            speakers: [
              {
                title: 'Gosia Bieniaszewska',
              },
            ],
            location: 'Staff Room',
          },
          {
            title: 'Wolność w relacjach. Język niosący życie',
            description:
              'Jak rozmawiać, komunikować w relacjach z rodzicami, przyjaciółmi, ludźmi z Kościoła i w związku?',
            speakers: [
              {
                title: 'Daria i Kuba Marciniak',
              },
            ],
            location: 'Łuczniczka',
          },
        ],
      },
    ],
  },
  {
    title: 'Piątek',
    content: `
8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od wstydu, życia przeszłością, naznaczenia.
  Gosia Bieniaszewska- Łuczniczka
- Wolność do zrozumienia siebie i odkrycia swojego powołania.
  Marysia i Marcin Lindner - Staff Room
- Wolność w relacjach. Zrozumieć i pokochać Kościół.
  Dlaczego czasami, jest tak trudno w relacjach w Kościele? Jaką
  przyjmować postawę, aby zrozumieć i pokochać Kościół?
  bp Marek Kamiński - Sala Główna

13.30 - STREFA CHILL & BE ACTIVE
16.00 - MOMENTUM W AKCJI
19.00 - SESJA WIECZORNA
22.00 - KONCERT NA PLAŻY
    `,
  },
  {
    title: 'Sobota',
    content: `
8.00 - MODLITWA
10.00 - SESJA PORANNA
    `,
  },
]

// const Tab = createMaterialTopTabNavigator()

const Schedule: FC = () => (
  <TextPage>
    {schedule.map((day) => {
      const { title, sessions } = day
      return (
        <View key={title}>
          <Markdown>{`## ${title}`}</Markdown>
          {sessions?.map((session) => {
            const { title: sessionTitle } = session
            return <Markdown key={sessionTitle}>{`### ${sessionTitle}`}</Markdown>
          })}
        </View>
      )
    })}

    {/* <Tab.Navigator screenOptions={{ title: 'Plan' }}>
      {schedule.map((day) => {
        const Page: FC = () => (
            <Markdown>{day.content}</Markdown>
            )
            
            return (
              <Tab.Screen
              key={day.title}
              name={day.title.toLocaleLowerCase()}
            component={Page}
            options={{ title: day.title }}
            />
            )
          })}
    </Tab.Navigator> */}
  </TextPage>
)

export default Schedule
