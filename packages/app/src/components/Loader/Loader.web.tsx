/** @jsx jsx */
import { FC } from 'react'
import { jsx, css, keyframes } from '@emotion/react'
import type LoaderProps from './Loader.props'
import SvgRings from './components/SvgRings'
import CenterView from './components/CenterView'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Loader: FC<LoaderProps> = ({ size = 64, ...props }) => {
  const animationContainerStyle = css`
    animation: ${rotate} 2.5s linear infinite;
    width: ${`${size}px`};
    height: ${`${size}px`};
    position: relative;
  `

  return (
    <div css={animationContainerStyle}>
      <SvgRings width={size} height={size} {...props} />
      <div css={animationContainerStyle}>
        <SvgRings width={size} height={size} {...props} ring={1} />
        <div css={animationContainerStyle}>
          <SvgRings width={size} height={size} {...props} ring={2} />
        </div>
      </div>
    </div>
  )
}

export const FullLoader: FC = () => (
  <CenterView>
    <Loader />
  </CenterView>
)

export default Loader
