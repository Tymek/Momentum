import { useEffect } from 'react'
import { useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'

export const useSpringTransition = (isOpen?: boolean, height?: number) => {
  const value = useSharedValue(isOpen && height ? height : 0)

  useEffect(() => {
    if (height) {
      value.value = isOpen ? height : 0
    }
  }, [isOpen, value, height])

  return useDerivedValue(() => {
    return withSpring(value.value, { damping: 15 })
  })
}
