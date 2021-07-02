import React, { FC } from 'react'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import useShadow from 'hooks/useShadow'
import { Info, Wrapper } from './Block'
import ExtendedInfo from './ExtendedInfo'

type SessionProps = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  begins_at?: Maybe<Scalars['timestamptz']>
  ends_at?: Maybe<Scalars['timestamptz']>
  speaker?: Maybe<SpeakerFragment>
  muted?: boolean
  isMainEvent?: Maybe<Scalars['Boolean']>
}

const TopicBlock: FC<SessionProps> = ({
  title,
  description,
  children,
  speaker,
  location,
  muted,
  isMainEvent,
}) => {
  const shadow = useShadow(2)

  return (
    <Wrapper style={!muted ? shadow : {}} muted={muted}>
      <Info>
        <Text>{title}</Text>
      </Info>
      <ExtendedInfo {...{ description, location, speaker, children, isMainEvent }} />
    </Wrapper>
  )
}

export default TopicBlock
