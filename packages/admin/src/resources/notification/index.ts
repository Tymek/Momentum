import NotificationsIcon from '@material-ui/icons/Notifications'
import { NotificationCreate, NotificationEdit, NotificationList } from './Notification'

export default {
  name: 'notification',
  icon: NotificationsIcon,
  list: NotificationList,
  edit: NotificationEdit,
  create: NotificationCreate,
  // show: NotificationShow,
}
