import { Dispatch, SetStateAction, useEffect } from 'react'
import { isBefore, parseISO } from 'date-fns'
import { useGetNotificationsQuery } from '@-local/db/lib/api'
import { readNotificationsVar } from 'utils/cache'
import useAsyncJsonStorage from './useAsyncJsonStorage'

const useNotifications = (): ReturnType<typeof useGetNotificationsQuery> & {
  unreadCount: number
  readNotifications?: string[]
  setReadNotifications: Dispatch<SetStateAction<string[] | undefined>>
} => {
  const result = useGetNotificationsQuery({ pollInterval: 5000 })
  const [readNotifications, setReadNotifications, isLoaded] = useAsyncJsonStorage<string[]>(
    'READ_NOTIFICATIONS',
    [],
  )

  useEffect(() => {
    if (isLoaded) {
      readNotificationsVar(readNotifications)
    }
  }, [isLoaded, readNotifications])

  if (result?.data?.notification) {
    result['data'] = {
      ...result['data'],
      notification: result.data.notification.filter(
        ({ published_at }) => !published_at || isBefore(parseISO(published_at), Date.now()),
      ),
    }
  }

  const unreadCount = result?.data?.notification?.filter(({ isRead }) => !isRead).length || 0

  return { ...result, unreadCount, readNotifications, setReadNotifications }
}

export default useNotifications
