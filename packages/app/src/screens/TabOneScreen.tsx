import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import config from 'utils/config'

import Text from 'components/Text'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Do wypełnienia&hellip;</Text>
      <View style={styles.separator} />
      <Text>{JSON.stringify(config, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
