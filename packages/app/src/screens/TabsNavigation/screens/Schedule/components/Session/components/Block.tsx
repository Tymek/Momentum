import React, { FC } from 'react'
import { format, parseISO } from 'date-fns'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import styled from '@emotion/native'
import useShadow from 'hooks/useShadow'
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

const Block: FC<SessionProps> = ({
  title,
  description,
  begins_at,
  children,
  speaker,
  location,
  muted,
}) => {
  const shadow = useShadow(2)

  return (
    <Wrapper style={!muted ? shadow : {}} muted={muted}>
      {
        <Info>
          <SessionName>{title}</SessionName>
          {begins_at && <SessionTime>{format(parseISO(begins_at), 'HH:mm')}</SessionTime>}
        </Info>
      }

      <ExtendedInfo {...{ description, location, speaker, children }} />
    </Wrapper>
  )
}

export const Wrapper = styled.View<{ withTopics?: boolean; muted?: boolean }>`
  background: ${({ theme, muted, withTopics }) =>
    withTopics || muted ? 'transparent' : theme.color.background};
  margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
  padding-bottom: 2px; /* NOTE: font bug compensation */
`

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.m}px`};
`

const SessionName = styled(Text)`
  font-family: ${({ theme }) => theme.font.headers};
  text-transform: uppercase;
  font-size: ${({ theme }) => `${theme.fontSize.l}px`};
  margin-right: auto;
`

const SessionTime = styled(Text)`
  font-family: ${({ theme }) => theme.font.default};
`

export default Block
