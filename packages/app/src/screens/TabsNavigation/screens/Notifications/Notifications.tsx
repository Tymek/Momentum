import React, { FC, useEffect } from 'react'
import { ScrollView } from 'react-native'
import styled from '@emotion/native'
import { useIsFocused } from '@react-navigation/native'
import { FullLoader as Loader } from 'components/Loader'
import Header from 'components/Header'
import ErrorBoundary from 'containers/error/Boundary'
import useNotifications from 'hooks/useNotifications'
import Notification from './components/Notification'

const NotificationsList: FC = () => {
  const { loading, error, data, readNotifications, setReadNotifications } = useNotifications()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (!isFocused && data?.notification && data?.notification.length) {
      const allRead = new Set([
        ...(readNotifications || []),
        ...data?.notification?.map(({ id }) => id),
      ])
      setReadNotifications([...allRead])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, data, setReadNotifications])

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
          const isFirst = index === 0
          const isLast = index + 1 === data?.notification.length

          const isRead = notification.isRead
          const isNextRead = !isLast ? notifications[index + 1].isRead : true
          const isPrevRead = !isFirst ? notifications[index - 1].isRead : true

          return (
            <Notification
              {...notification}
              key={notification.id}
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
