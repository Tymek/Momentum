import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes'
import { TopicCreate, TopicEdit, TopicList } from './Topic'

export default {
  name: 'topic',
  icon: SpeakerNotesIcon,
  list: TopicList,
  edit: TopicEdit,
  create: TopicCreate,
}
