import React, { FC } from 'react'

import { GetScheduleQuery } from '@-local/db/lib/generated/api'
import Text from 'components/Text'
import styled from '@emotion/native'

type SessionProps = ArrayElement<GetScheduleQuery['session']>

const Session: FC<SessionProps> = ({ name, begins_at, ends_at, topics }) => {
  return (
    <Wrapper>
      <Text>{name}</Text>
      <Text>{begins_at}</Text>
      <Text>{ends_at}</Text>
      {topics && <Text>{JSON.stringify(topics, null, 2)}</Text>}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background: ${({ theme }) => theme.color.gray};
  padding: ${({ theme }) => `${theme.spacing.m}px`};
  margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};
`

export default Session
