import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const set = async (key: string, value: string | undefined) => {
  try {
    await (value !== undefined ? AsyncStorage.setItem(key, value) : AsyncStorage.removeItem(key))
  } catch (error) {
    console.warn(error)
  }
}

const get = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.warn(error)
  }
}

/**
 * @returns {Array} [value, dispatch, isLoaded]
 */
const useAsyncStorage = (
  userKey: string,
  initialValue?: string,
): [string | undefined, Dispatch<SetStateAction<string | undefined>>, boolean] => {
  const [storedValue, setStoredValue] = useState<string | undefined>(initialValue)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const key = useMemo(() => `app_${userKey}`, [userKey])

  useEffect(() => {
    get(key)
      .then((value) => {
        setStoredValue(value || initialValue)
      })
      .finally(() => setIsLoaded(true))
  }, [key, initialValue])

  const setValue = async (value?: string | ((val?: string) => string | undefined)) => {
    const valueToStore =
      value instanceof Function ? value(storedValue || initialValue || '') : value
    setStoredValue(valueToStore)
    set(key, valueToStore)
  }

  return [storedValue || initialValue, setValue, isLoaded]
}

export default useAsyncStorage
