import { useGetSongsQuery } from '@-local/db/lib/api'
import { useNavigation } from '@react-navigation/native'
import Loader from 'components/Loader'
import TextPage from 'components/TextPage'
import { Maybe } from 'graphql/jsutils/Maybe'
import React, { FC } from 'react'
import { FlatList } from 'react-native'
import ListItem from './components/ListItem'

const Songs: FC = () => {
  const { data, loading, error } = useGetSongsQuery({ pollInterval: 10000 })
  const navigation = useNavigation()

  const onPress = (original_title: Maybe<string>) =>
    navigation.navigate('Root', {
      screen: 'Info',
      params: {
        screen: 'Song',
        params: {
          original_title,
        },
      },
    })

  if (loading) return <Loader />
  if (error || !data) throw error

  return (
    <TextPage>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.song}
        renderItem={({ item }) => (
          <ListItem onPress={() => onPress(item.original_title)}>
            {item.title || item.original_title}
          </ListItem>
        )}
      />
    </TextPage>
  )
}

export default Songs
