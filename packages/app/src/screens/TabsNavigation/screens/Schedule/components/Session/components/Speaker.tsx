import React, { FC } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from '@emotion/native'

import { SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import speakerImages from 'utils/speakerImages'

const Speaker: FC<SpeakerFragment & { size?: number }> = ({ image, name, size = 38 }) => {
  const navigation = useNavigation()
  const goToSpeaker = () =>
    navigation.navigate('Root', {
      screen: 'Info',
      params: {
        screen: 'Speaker',
        params: {
          name,
        },
      },
    })

  return (
    <SessionSpeaker>
      <SpeakerSection onPress={goToSpeaker}>
        {image && Object.keys(speakerImages).includes(image) && (
          <SpeakerPhoto
            key={image}
            source={speakerImages[image as keyof typeof speakerImages]}
            style={{ height: size, width: size }}
          />
        )}
        <Text>{name}</Text>
      </SpeakerSection>
    </SessionSpeaker>
  )
}

const SessionSpeaker = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.m}px ${theme.spacing.m}px`};
  flex-grow: 1;
  flex-basis: 0;
`

const SpeakerSection = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SpeakerPhoto = styled(Image)`
  margin-right: ${({ theme }) => `${theme.spacing.s}px`};
  border-radius: ${({ theme }) => `${theme.borderRadius.l}px`};
  background: rgba(229, 229, 231, 0.5);
  margin-top: 4px;
`

export default Speaker
