import React, { FC } from 'react'
import { parseISO, isBefore } from 'date-fns'
import { ScrollView } from 'react-native'
import { useGetNotificationsQuery } from '@-local/db/lib/api'
import { FullLoader as Loader } from 'components/Loader'
import Header from 'components/Header'
import ErrorBoundary from 'containers/error/Boundary'
import Notification from './components/Notification'
import styled from '@emotion/native'

const NotificationsList: FC = () => {
  const { loading, error, data } = useGetNotificationsQuery()

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
        notifications
          .filter(
            ({ published_at }) => !published_at || isBefore(parseISO(published_at), Date.now()),
          )
          .map((notification, index) => {
            const isFirst = index === 0
            const isLast = index + 1 === data?.notification.length

            const isRead = notification.isRead
            const isNextRead = !isLast ? notifications[index + 1].isRead : true
            const isPrevRead = !isFirst ? notifications[index - 1].isRead : true

            return (
              <Notification
                key={notification.id}
                {...notification}
                unread={!notification.isRead}
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
