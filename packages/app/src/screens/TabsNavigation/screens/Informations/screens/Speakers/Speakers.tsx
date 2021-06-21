import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { useTheme } from '@emotion/react'

import { useGetSpeakersQuery } from '@-local/db/lib/api'
import ErrorBoundary from 'containers/error/Boundary'
import { FullLoader as Loader } from 'components/Loader'
import SpeakerCard from './components/SpeakerCard'

const Speakers: FC = () => {
  const { data, loading, error } = useGetSpeakersQuery()
  const theme = useTheme()

  if (loading) return <Loader />
  if (error || !data) throw error

  return (
    <FlatList
      key={Math.random()}
      contentContainerStyle={{ padding: theme.spacing.m / 2 }}
      data={data.speaker}
      renderItem={({ item }) => <SpeakerCard {...item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      // extraData={selectedId}
    />
  )
}

const SpeakersScreen: FC = () => (
  <ErrorBoundary>
    <Speakers />
  </ErrorBoundary>
)

export default SpeakersScreen
