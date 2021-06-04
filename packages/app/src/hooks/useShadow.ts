import { useMemo } from 'react'
import shadow, { ShadowType } from 'utils/shadow'

const useShadow: ShadowType = (depth, options) =>
  useMemo(() => shadow(depth, options), [depth, options])

export default useShadow
