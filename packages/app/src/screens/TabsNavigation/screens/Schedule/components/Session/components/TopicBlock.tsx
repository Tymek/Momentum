import React, { FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useTheme } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import useShadow from 'hooks/useShadow'
import { TouchableInfo, Wrapper } from './Block'
import { useSpringTransition } from 'hooks/useSpringTransition'
import ExtendedInfo from './ExtendedInfo'

type SessionProps = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  begins_at?: Maybe<Scalars['timestamptz']>
  ends_at?: Maybe<Scalars['timestamptz']>
  speaker?: Maybe<SpeakerFragment>
  muted?: boolean
}

const TopicBlock: FC<SessionProps> = ({
  title,
  description,
  /*ends_at,*/
  children,
  speaker,
  location,
  muted,
}) => {
  const theme = useTheme()
  const shadow = useShadow(2)
  const [isOpen, setIsOpen] = useState<boolean>()
  const [height, setHeight] = useState<number>()
  const transition = useSpringTransition(isOpen, height)
  const style = useAnimatedStyle(() => ({
    height: transition.value,
  }))

  return (
    <Wrapper style={!muted ? shadow : {}} muted={muted}>
      <TouchableInfo onPress={() => setIsOpen(!isOpen)}>
        <Text>{title}</Text>
        <MaterialIcons
          name={isOpen ? 'unfold-less' : 'unfold-more'}
          size={24}
          color={theme.colors.text}
        />
      </TouchableInfo>

      <Animated.View style={[{ overflow: 'hidden' }, style]}>
        <View
          onLayout={(event) => {
            setHeight(event?.nativeEvent?.layout?.height)
          }}
        >
          <ExtendedInfo {...{ description, location, speaker, children }} />
        </View>
      </Animated.View>
    </Wrapper>
  )
}

export default TopicBlock
