import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import useAsyncStorage from './useAsyncStorage'

const useAsyncJsonStorage = <T>(
  key: string,
  initialValue?: T,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, boolean] => {
  const stringifiedValue = JSON.stringify(initialValue)
  const [value, setValue, isLoaded] = useAsyncStorage(key, stringifiedValue)
  const currentValue: T = useMemo(() => (value !== undefined ? JSON.parse(value) : value), [value])

  const dispatch = useCallback(
    async (nextValue?: T | ((val?: T) => T | undefined)) => {
      const valueToStore = nextValue instanceof Function ? nextValue(currentValue) : nextValue
      setValue(valueToStore === undefined ? undefined : JSON.stringify(valueToStore))
    },
    [currentValue, setValue],
  )

  return [currentValue, dispatch, isLoaded]
}

export default useAsyncJsonStorage
