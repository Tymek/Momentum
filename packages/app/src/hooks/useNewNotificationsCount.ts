import useAsyncStorage from './useAsyncStorage'

const useNewNotificationsCount = (): [number, (value: number) => void] => {
  const [count, setCount] = useAsyncStorage('NEW_NOTIFICATIONS_COUNT')

  return [
    count !== undefined ? Number.parseInt(count, 10) : 0,
    (newCount) => setCount(`${newCount}`),
  ]
}

export default useNewNotificationsCount
