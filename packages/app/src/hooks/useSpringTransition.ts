import { useEffect } from 'react'
import Animated, { useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'

export const useSpringTransition = (
  isOpen?: boolean,
  height?: number,
): Readonly<Animated.SharedValue<number>> => {
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
