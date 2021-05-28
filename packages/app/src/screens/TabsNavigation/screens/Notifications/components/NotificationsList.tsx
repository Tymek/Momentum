import React, { FC, Fragment } from 'react'
import { parseISO, isAfter } from 'date-fns'

import Markdown from 'components/Markdown'
import { useGetNotificationsQuery } from '@-local/db/lib/generated/api'
import NotificationLoader from './NotificationLoader'
import styled from '@emotion/native'

const NotificationContainer = styled.View`
  margin-bottom: ${({ theme }) => `${theme.spacing.l}px`};
`

const Loader = (
  <>
    {[...Array(3).keys()].map((key) => (
      <NotificationContainer key={key}>
        <NotificationLoader />
      </NotificationContainer>
    ))}
  </>
)

const Notifications: FC = () => {
  const { loading, error, data } = useGetNotificationsQuery()

  if (loading) return Loader
  if (error) throw error

  return (
    <>
      {data?.notification.map((notification) => {
        const isInFuture =
          !!notification.published_at && isAfter(parseISO(notification.published_at), Date.now())

        if (isInFuture) {
          return <Fragment key={notification.id} />
        }

        return (
          <NotificationContainer key={notification.id}>
            <Markdown>{`# ${notification.title}\n${notification.content}`}</Markdown>
          </NotificationContainer>
        )
      })}
    </>
  )
}

export default Notifications
