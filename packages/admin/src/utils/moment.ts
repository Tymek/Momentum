import moment from 'moment-timezone'
import 'moment/locale/pl'

moment.locale('pl')
moment.tz.setDefault('Europe/Warsaw')

export default moment
