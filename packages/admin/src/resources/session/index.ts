import ScheduleIcon from '@material-ui/icons/Schedule'
import SessionCreate from './SessionCreate'
import SessionShow from './SessionShow'
import SessionEdit from './SessionEdit'
import SessionList from './SessionList'

export default {
  name: 'session',
  icon: ScheduleIcon,
  list: SessionList,
  edit: SessionEdit,
  create: SessionCreate,
  show: SessionShow,
}
