import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated'
import CenterView from './components/CenterView'
import SvgRings from './components/SvgRings'
import LoaderProps from './Loader.props'

const Loader: FC<LoaderProps> = ({ size = 64, ...props }) => {
  const rotation = useSharedValue(0)

  const ring = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value / 10}deg` }],
    }
  })
  const ring1 = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value / 5}deg` }],
    }
  })
  const ring2 = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value / 2.5}deg` }],
    }
  })

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(3600, { duration: 2500, easing: Easing.linear }),
      -1,
      false,
    )

    return () => {
      cancelAnimation(rotation)
    }
  }, [rotation])

  return (
    <View style={{ width: size, height: size, position: 'relative' }}>
      <Animated.View style={[{ width: size, height: size, position: 'absolute' }, ring]}>
        <SvgRings width={size} height={size} {...props} />
      </Animated.View>
      <Animated.View style={[{ width: size, height: size, position: 'absolute' }, ring1]}>
        <SvgRings width={size} height={size} {...props} ring={1} />
      </Animated.View>
      <Animated.View style={[{ width: size, height: size, position: 'absolute' }, ring2]}>
        <SvgRings width={size} height={size} {...props} ring={2} />
      </Animated.View>
    </View>
  )
}

export const FullLoader: FC = () => (
  <CenterView>
    <Loader />
  </CenterView>
)

export default Loader
