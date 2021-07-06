import { useGetSongsQuery } from '@-local/db/lib/api'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from '@emotion/native'
import Loader from 'components/Loader'
import Text from 'components/Text'
import TextPage from 'components/TextPage'
import React, { FC, useEffect, useMemo } from 'react'
import HeaderTitle from './components/HeaderTitle'

export type ParamList = {
  Song: { original_title: string }
}

type SongScreenRouteProp = RouteProp<ParamList, 'Song'>

type SongScreenNavigationProp = StackNavigationProp<ParamList, 'Song'>

type SongProps = {
  route: SongScreenRouteProp
  navigation: SongScreenNavigationProp
}

const Song: FC<SongProps> = ({ route, navigation }) => {
  const { data, loading, error } = useGetSongsQuery()

  const song = useMemo(
    () => data?.song?.find((song) => song.original_title === route.params?.original_title),
    [data, route],
  )

  useEffect(() => {
    if (song) {
      navigation.setOptions({
        // eslint-disable-next-line react/display-name
        headerTitle: () => <HeaderTitle song={song} />,
      })
    }
  }, [song, navigation])

  if (loading) return <Loader />
  if (error || !data) throw error

  if (!song) {
    if (route.params?.original_title.includes('%20')) {
      navigation.replace('Song', {
        original_title: decodeURI(route.params?.original_title),
      })
    } else if (navigation.canGoBack()) {
      navigation.pop()
    }
    return <></>
  }

  return (
    <TextPage>
      {song.lyrics.map((lyrics) => (
        <Lyric key={lyrics.id}>
          {lyrics.header && <LyricHeader>{lyrics.header}:</LyricHeader>}
          <Text>{lyrics.content}</Text>
        </Lyric>
      ))}
    </TextPage>
  )
}

const LyricHeader = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.s}px`};
  text-transform: capitalize;
`

const Lyric = styled.View`
  margin-vertical: ${({ theme }) => `${theme.spacing.s}px`};
`

export default Song
