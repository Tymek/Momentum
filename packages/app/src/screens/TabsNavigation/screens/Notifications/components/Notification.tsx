import React, { FC } from 'react'

import Markdown from 'components/Markdown'
import Text from 'components/Text'
import styled from '@emotion/native'
import { Notification } from '@-local/db/lib/api'
import { format, formatDistance, parseISO } from 'date-fns'
import { pl } from 'date-fns/locale'

const dateOptions = { locale: pl }

type NotificationProps = Pick<Notification, 'id' | 'title' | 'content' | 'published_at'> & {
  unread?: boolean
  prevUnread?: boolean
  nextUnread?: boolean
  last?: boolean
}

const NotificationComponent: FC<NotificationProps> = ({
  published_at,
  title,
  content,
  unread,
  prevUnread,
  nextUnread,
  last,
}) => {
  const time = published_at && parseISO(published_at)
  const absoluteTime = time && format(time, 'EEEE, HH:mm', dateOptions)
  const relativeTime = time && formatDistance(time, Date.now(), dateOptions)

  return (
    <NotificationContainer>
      <Content last={last}>
        <Timestamp highlighted={unread}>
          {time ? `${absoluteTime} (${relativeTime} temu)` : ''}
        </Timestamp>
        <Main>
          <Markdown>{`# ${title}\n${content}`}</Markdown>
        </Main>
      </Content>
      <Timeline>
        <TimelinePrefixLine highlighted={unread && prevUnread} />
        <TimelineBulletpoint highlighted={unread} />
        <TimelineSufixLine highlighted={unread && nextUnread} />
      </Timeline>
    </NotificationContainer>
  )
}

const NotificationContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
`

const Main = styled.View<{ last?: boolean }>`
  padding-right: ${({ theme }) => `${theme.spacing.s}px`};
`

const Content = styled.View<{ last?: boolean }>`
  margin: ${({ theme }) => `${theme.spacing.l}px 0`};
  padding-left: ${({ theme }) => `${theme.spacing.xxs}px`};
  padding-bottom: ${({ theme, last }) => `${last ? theme.spacing.xl : 0}px`};
  flex: 1;
`

const Timestamp = styled(Text)<{ highlighted?: boolean }>`
  text-align: right;
  padding-bottom: ${({ theme }) => `${theme.spacing.xxs}px`};
  color: ${({ theme, highlighted }) =>
    highlighted ? theme.timeline.highlightedTextColor : theme.timeline.textColor};
`

const Timeline = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => `${theme.spacing.l}px`};
  height: 100%;
`

const TimelineBulletpoint = styled.View<{ highlighted?: boolean }>`
  width: 8px;
  height: 8px;
  background: ${({ theme, highlighted }) => (highlighted ? theme.color.accent : theme.color.gray)};
  border-radius: 50%;
`

const TimelineLine = styled.View<{ highlighted?: boolean }>`
  width: 2px;
  background: ${({ theme, highlighted }) => (highlighted ? theme.color.accent : theme.color.gray)};
`

const TimelinePrefixLine = styled(TimelineLine)`
  height: 18px;
  margin-bottom: ${({ theme }) => `${theme.spacing.xs}px`};
`

const TimelineSufixLine = styled(TimelineLine)`
  flex-grow: 1;
  margin-top: ${({ theme }) => `${theme.spacing.xs}px`};
`

export default NotificationComponent
