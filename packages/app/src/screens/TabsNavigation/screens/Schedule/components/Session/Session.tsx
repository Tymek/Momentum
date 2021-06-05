import React, { FC } from 'react'
import { format, parseISO } from 'date-fns'

import { GetScheduleQuery } from '@-local/db/lib/generated/api'
import Text from 'components/Text'
import styled from '@emotion/native'
import useShadow from 'hooks/useShadow'
import Speaker from './components/Speaker'

type SessionProps = ArrayElement<GetScheduleQuery['session']>

const Session: FC<SessionProps> = ({ name, begins_at, /*ends_at,*/ topics, speaker }) => {
  const shadow = useShadow(3)
  const hasTopics = topics && topics.length > 0

  return (
    <Wrapper style={shadow} withTopics={hasTopics}>
      <Info>
        <SessionName>{name}</SessionName>
        <SessionTime>{format(parseISO(begins_at), 'HH:mm')}</SessionTime>
        {/* {ends_at && <Text>{format(parseISO(ends_at), 'HH:mm')}</Text>} */}
      </Info>
      {speaker && (
        <SessionSpeaker>
          <Speaker {...speaker} />
        </SessionSpeaker>
      )}
      {hasTopics && (
        <TopicsSection>
          {topics.map((topic) => (
            <Topic key={topic.id}>
              <Text>{topic.subject}</Text>
              {topic.speaker && (
                <TopicSpeaker>
                  <Speaker {...topic.speaker} />
                </TopicSpeaker>
              )}
            </Topic>
          ))}
        </TopicsSection>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.View<{ withTopics?: boolean }>`
  background: ${({ theme, withTopics }) => (withTopics ? 'transparent' : theme.color.background)};
  margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
`

const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.m}px`};
`

const SessionName = styled(Text)`
  font-family: ${({ theme }) => theme.font.headers};
  text-transform: uppercase;
  font-size: ${({ theme }) => `${theme.fontSize.l}px`};
  margin-right: auto;
`

const SessionTime = styled(Text)`
  font-family: ${({ theme }) => theme.font.accent};
`

const SessionSpeaker = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.m}px ${theme.spacing.m}px`};
`

const TopicSpeaker = styled.View`
  padding-top: ${({ theme }) => `${theme.spacing.s}px`};
`

const TopicsSection = styled.View`
  padding-bottom: ${({ theme }) => `${theme.spacing.s}px`};
`

const Topic = styled.View`
  margin-bottom: ${({ theme }) => `${theme.spacing.xs}px`};
  padding: ${({ theme }) => `${theme.spacing.s}px ${theme.spacing.m}px`};
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
`

export default Session
