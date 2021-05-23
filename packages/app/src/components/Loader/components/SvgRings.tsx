import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import Svg, { G, Path, SvgProps } from 'react-native-svg'

export type SvgRingsProps = SvgProps & {
  colors?: [string, string]
  size?: number
  ring?: 0 | 1 | 2 | 3 | 4
}

const SvgRings: FC<SvgRingsProps> = ({ colors, size = 64, ring = 0, ...props }) => {
  const theme = useTheme()
  const color1 = colors && colors.length > 0 ? colors[0] : theme.color.primary
  const color2 = colors && colors.length > 1 ? colors[1] : theme.color.gray

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 66.146 66.146"
      style={{ position: 'absolute', top: 0, left: 0 }}
      {...props}
    >
      {ring === 0 && (
        <G>
          <Path
            d="M56.459 56.459c12.908-12.908 12.908-33.864 0-46.772l-1.32 1.32c12.194 12.195 12.194 31.937 0 44.131z"
            fill={color2}
          />
          <Path
            d="M9.687 56.459l1.32-1.32c-12.194-12.195-12.194-31.937 0-44.132l-1.32-1.32C-3.22 22.595-3.22 43.551 9.687 56.46z"
            fill={color1}
          />
        </G>
      )}
      {ring === 1 && (
        <G>
          <Path
            d="M51.782 51.782c10.324-10.324 10.324-27.094 0-37.418l-1.41 1.41c9.562 9.562 9.562 25.036 0 34.598z"
            fill={color2}
          />
          <Path
            d="M14.364 51.782l1.41-1.41c-9.562-9.562-9.562-25.036 0-34.598l-1.41-1.41c-10.325 10.324-10.325 27.094 0 37.418z"
            fill={color1}
          />
        </G>
      )}
      {ring === 2 && (
        <G>
          <Path
            d="M47.105 47.105c7.741-7.742 7.741-20.322 0-28.063l-1.298 1.298c7.04 7.04 7.04 18.426 0 25.466z"
            fill={color2}
          />
          <Path
            d="M19.041 47.105l1.299-1.299c-7.04-7.04-7.04-18.426 0-25.466l-1.3-1.298c-7.74 7.741-7.74 20.32.001 28.063z"
            fill={color1}
          />
        </G>
      )}
      {ring === 3 && (
        <G>
          <Path
            d="M42.427 42.427c5.159-5.159 5.159-13.55 0-18.708l-1.279 1.279a11.406 11.406 0 010 16.15z"
            fill={color2}
          />
          <Path
            d="M23.719 42.427l1.279-1.279a11.406 11.406 0 010-16.15l-1.28-1.28c-5.158 5.16-5.158 13.55 0 18.709z"
            fill={color1}
          />
        </G>
      )}
      {ring === 4 && (
        <G>
          <Path
            d="M37.75 37.75c2.576-2.575 2.576-6.779 0-9.355l-1.222 1.223a4.874 4.874 0 010 6.91z"
            fill={color2}
          />
          <Path
            d="M28.395 37.75l1.223-1.222a4.874 4.874 0 010-6.91l-1.223-1.223c-2.576 2.576-2.576 6.78 0 9.356z"
            fill={color1}
          />
        </G>
      )}
    </Svg>
  )
}

export default SvgRings
