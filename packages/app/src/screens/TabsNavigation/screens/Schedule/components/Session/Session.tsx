import React, { FC } from 'react'
import { format, parseISO } from 'date-fns'

import { GetScheduleQuery } from '@-local/db/lib/api'
import Block from './components/Block'
import TopicBlock from './components/TopicBlock'
import { View } from 'react-native'

type SessionProps = ArrayElement<GetScheduleQuery['session']>

const Session: FC<SessionProps> = ({
  name,
  begins_at,
  ends_at,
  topics,
  speaker,
  location,
  description,
  is_main_event,
}) => {
  const hasTopics = topics && topics.length > 0
  const muted = Number.parseInt(format(parseISO(begins_at), 'H'), 10) < 4

  return (
    <Block
      muted={muted || hasTopics}
      title={name}
      speaker={speaker}
      location={location}
      description={description}
      begins_at={begins_at}
      ends_at={ends_at}
      is_main_event={is_main_event}
    >
      {hasTopics && (
        <View>
          {topics.map((topic) => (
            <TopicBlock key={topic.id} {...topic} title={topic.subject} />
          ))}
        </View>
      )}
    </Block>
  )
}

export default Session
