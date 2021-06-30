import React, { FC, useRef, useState } from 'react'
import styled from '@emotion/native'
import { useTheme } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { TouchableOpacity, View } from 'react-native'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import Location from './Location'
import Speaker from './Speaker'
import { useSpringTransition } from 'hooks/useSpringTransition'

type ExtendedInfoProps = {
  description?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  speaker?: Maybe<SpeakerFragment>
}

export const ExtendedInfo: FC<ExtendedInfoProps> = ({
  description,
  speaker,
  location,
  children,
}) => {
  const isExpandable = useRef(!!(description || location || speaker))
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(!isExpandable.current)
  const [height, setHeight] = useState<number>()
  const transition = useSpringTransition(isOpen, height)
  const style = useAnimatedStyle(() => ({
    height: transition.value,
  }))

  return (
    <>
      <Animated.View style={[{ overflow: 'hidden' }, style]}>
        <View
          onLayout={(event) => {
            setHeight(event?.nativeEvent?.layout?.height)
          }}
        >
          {description && (
            <DescriptionSection>
              <DescriptionText>{description}</DescriptionText>
            </DescriptionSection>
          )}
          {location || speaker ? (
            <SpeakerAndLocation>
              {location && <Location>{location}</Location>}
              {speaker && <Speaker {...speaker} />}
            </SpeakerAndLocation>
          ) : null}
        </View>
      </Animated.View>
      {children}
      {isExpandable.current && (
        <TouchableExpandButton onPress={() => setIsOpen(!isOpen)}>
          <MaterialIcons
            name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color={theme.colors.text}
          />
        </TouchableExpandButton>
      )}
    </>
  )
}

const DescriptionSection = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.m}px ${theme.spacing.l}px`};
`

const DescriptionText = styled(Text)`
  font-family: ${({ theme }) => theme.font.light};
`

const SpeakerAndLocation = styled.View`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

const TouchableExpandButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xxs}px`};
`

export default ExtendedInfo
