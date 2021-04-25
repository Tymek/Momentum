import React from 'react'
import { StatusBar } from 'expo-status-bar'

import ThemeProvider from 'providers/Theme'
import Home from 'containers/Home'
import Speaker from 'containers/Speaker'

export default function App() {
  return (
    <ThemeProvider>
      <Home />
      {/* <Speaker
        name="Jacek Gromadzki"
        description="Pastor kościoła „Droga Życia” w Kołobrzegu. Współgospodarz wydarzenia. Z wykształcenia teolog, z pasji kochający ludzi duszpasterz."
        image={require('./assets/speakers/jacek-gromadzki.jpg')}
      /> */}
      {/* <Speaker
        name="biskup Marek Kamiński"
        description="Biskup Kościoła Zielonoświątkowego w Polsce, doktor nauk teologicznych, członek i przewodniczący wielu organizacji zrzeszających kościoły na całym świecie. Przyjaciel młodzieży."
        image={require('./assets/speakers/marek-kaminski.jpg')}
      /> */}
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
