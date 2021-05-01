import { FC } from 'react'
import { Login } from 'react-admin'
import theme from '../utils/theme'

const MyLoginPage: FC = () => (
  <Login backgroundImage="/panel/static/images/baltyk.jpg" theme={theme} />
)

export default MyLoginPage
