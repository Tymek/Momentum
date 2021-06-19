import React, { FC } from 'react'
import MarkerIcon from '../assets/location.svg'
import MarkerSharp from '../assets/location-sharp.svg'
import MarkerOutline from '../assets/location-outline.svg'

export type MarkerProps = {
  type?: 'default' | 'sharp' | 'outline'
  fill?: string
}

const Marker: FC<MarkerProps> = ({ type, fill }) => {
  if (type === 'sharp') {
    return <MarkerSharp width={32} height={32} fill={fill} />
  }
  if (type === 'outline') {
    return <MarkerOutline width={32} height={32} fill={fill} />
  }

  return <MarkerIcon width={32} height={32} fill={fill} />
}

export default Marker
