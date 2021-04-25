import React from 'react'
import { StatusBar } from 'expo-status-bar'

import ThemeProvider from 'providers/Theme'
import Home from 'containers/Home'

// const Container = styled.View`
//   flex: 1;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;
// `

export default function App() {
  return (
    <ThemeProvider>
      {/* <Container> */}
      <Home />
        <StatusBar style="auto" />
      {/* </Container> */}
    </ThemeProvider>
  )
}
