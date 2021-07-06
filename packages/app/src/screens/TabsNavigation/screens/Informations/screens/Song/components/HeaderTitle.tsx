import React, { FC } from 'react'
import { View } from 'react-native'
import Text from 'components/Text'
import styled from '@emotion/native'
import { Song } from '@-local/db/lib/types'

const Subtitle = styled(Text)`
  font-size: 12;
`

const HeaderTitle: FC<{ song: Pick<Song, 'title' | 'original_title' | 'author'> }> = ({ song }) => (
  <View>
    <Text>{song.title || song.original_title}</Text>
    {<Subtitle>{song.title ? `${song.original_title}  - ${song.author}` : song.author}</Subtitle>}
  </View>
)

export default HeaderTitle
