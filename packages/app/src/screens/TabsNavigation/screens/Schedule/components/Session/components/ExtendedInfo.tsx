import React, { FC } from 'react'
import styled from '@emotion/native'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import Location from './Location'
import Speaker from './Speaker'

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
}) => (
  <>
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
    {children}
  </>
)

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
  padding-top: 1px;
  /* justify-content: space-between; */
`

export default ExtendedInfo
