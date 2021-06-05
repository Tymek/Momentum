import React, { FC } from 'react'
import { Image } from 'react-native'
import styled from '@emotion/native'

import { SpeakerFragment } from '@-local/db/lib/generated/api'
import Text from 'components/Text'
import speakerImages from 'utils/speakerImages'

const Speaker: FC<SpeakerFragment & { size?: number }> = ({ image, name, size = 38 }) => (
  <SpeakerSection>
    {image && Object.keys(speakerImages).includes(image) && (
      <SpeakerPhoto
        key={image}
        source={speakerImages[image as keyof typeof speakerImages]}
        style={{ height: size, width: size }}
      />
    )}
    <Text>{name}</Text>
  </SpeakerSection>
)

const SpeakerSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SpeakerPhoto = styled(Image)`
  margin-right: ${({ theme }) => `${theme.spacing.s}px`};
  border-radius: ${({ theme }) => `${theme.borderRadius.l}px`};
`

export default Speaker
