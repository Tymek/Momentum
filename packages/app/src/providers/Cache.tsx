import React, { FC, useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { Asset } from 'expo-asset'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useGetScheduleQuery, useGetSpeakersQuery, useGetSongsQuery } from '@-local/db/lib/api'
import { FullLoader } from 'components/Loader'

const cacheResourcesAsync = async () => {
  const assests = [
    require('assets/images/info/mowcy.jpg'),
    require('assets/images/info/mowcy-light.jpg'),
  ]

  const fontAssets = [
    FontAwesome.font,
    Ionicons.font,
    MaterialCommunityIcons.font,
    MaterialIcons.font,
  ].map((font) => Font.loadAsync(font))

  const cacheAssets = assests.map((image) => {
    return Asset.fromModule(image)
      .downloadAsync()
      .then(() => {
        console.info('loaded', image)
      })
  })

  await Promise.all([...cacheAssets, ...fontAssets])
}

const CacheLoading: FC = ({ children }) => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const { loading: loadingSchedule } = useGetScheduleQuery()
  const { loading: loadingSpeakers } = useGetSpeakersQuery()
  useGetSongsQuery()

  useEffect(() => {
    cacheResourcesAsync().finally(() => setIsReady(true))
  }, [])

  if (!isReady || loadingSchedule || loadingSpeakers) {
    return Platform.OS === 'web' ? <FullLoader /> : <AppLoading />
  }

  return <>{children}</>
}

export default CacheLoading
