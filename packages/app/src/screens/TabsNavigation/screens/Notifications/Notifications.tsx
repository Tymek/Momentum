import React, { FC, Fragment } from 'react'
import { parseISO, isAfter } from 'date-fns'
import { useGetNotificationsQuery } from '@-local/db/lib/generated/api'
import { FullLoader as Loader } from 'components/Loader'

import Header from 'components/Header'
import ErrorBoundary from 'containers/error/Boundary'
import Notification from './components/Notification'
import styled from '@emotion/native'
import { ScrollView } from 'react-native'

const NotificationsList: FC = () => {
  const { loading, error, data } = useGetNotificationsQuery()
  // eslint-disable-next-line unicorn/prefer-set-has
  const readNotifications: Array<string> = []

  if (loading) {
    return (
      <NotificationsPage>
        <Loader />
      </NotificationsPage>
    )
  }

  if (error) throw error
  const { notification: notifications } = data || {}

  return (
    <NotificationsPage>
      {notifications &&
        notifications.map((notification, index) => {
          const isLast = index + 1 === data?.notification.length
          const isInFuture =
            !!notification.published_at && isAfter(parseISO(notification.published_at), Date.now())

          if (isInFuture) {
            return <Fragment key={notification.id} />
          }

          const isRead = readNotifications.includes(notification.id)
          const isNextRead = !isLast
            ? readNotifications.includes(notifications[index + 1].id)
            : true
          const isPrevRead =
            index !== 0 ? readNotifications.includes(notifications[index - 1].id) : true

          console.log({ isRead, isNextRead, isPrevRead })
          return (
            <Notification
              key={notification.id}
              {...notification}
              unread={!isRead}
              prevUnread={!isPrevRead || (!isRead && index === 0)}
              nextUnread={!isNextRead}
              last={isLast}
            />
          )
        })}
    </NotificationsPage>
  )
}

const Notifications: FC = () => {
  return (
    <ErrorBoundary>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <NotificationsList />
      </ScrollView>
    </ErrorBoundary>
  )
}

const NotificationsPage = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
  min-height: 320px;
  padding: ${({ theme }) => `0 ${theme.spacing.l}px`};
  flex-grow: 1;
`

export default Notifications
