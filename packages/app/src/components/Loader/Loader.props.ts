import { SvgProps } from 'react-native-svg'
import { SvgRingsProps } from './components/SvgRings'

type LoaderProps = SvgProps & Omit<SvgRingsProps, 'ring'>

export default LoaderProps
