import React, { FC } from 'react'
import MarkerIcon from '../assets/location.svg'
import MarkerSharp from '../assets/location-sharp.svg'
import MarkerOutline from '../assets/location-outline.svg'
import MarkerUmbrella from '../assets/umbrella-beach.svg'
import MarkerTrain from '../assets/train.svg'
import MarkerBus from '../assets/bus.svg'

export type MarkerProps = {
  type?: 'default' | 'sharp' | 'outline' | 'umbrella' | 'train' | 'bus'
  fill?: string
}

const Marker: FC<MarkerProps> = ({ type, fill }) => {
  if (type === 'sharp') {
    return <MarkerSharp width={32} height={32} fill={fill} />
  }
  if (type === 'outline') {
    return <MarkerOutline width={32} height={32} fill={fill} />
  }
  if (type === 'umbrella') {
    return <MarkerUmbrella width={32} height={32} fill={fill} />
  }
  if (type === 'train') {
    return <MarkerTrain width={32} height={32} fill={fill} />
  }
  if (type === 'bus') {
    return <MarkerBus width={32} height={32} fill={fill} />
  }

  return <MarkerIcon width={32} height={32} fill={fill} />
}

export default Marker
