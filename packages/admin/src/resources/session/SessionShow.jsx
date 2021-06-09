import {
  Datagrid,
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  FunctionField,
  ReferenceManyField,
  EditButton,
  TopToolbar,
  Button,
  ReferenceField,
} from 'react-admin'
import { Link } from 'react-router-dom'
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes'
import { withStyles } from '@material-ui/core/styles'
import moment from 'utils/moment'

const styles = {
  button: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}

const Total = (props) => <span>{props.total || <>&mdash;</>}</span>

const AddNewCommentButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/topic/create',
      state: {
        session_id: record ? record.id : null,
      },
    }}
    label="Dodaj temat"
  >
    <SpeakerNotesIcon />
  </Button>
)

const AddNewCommentBottomButton = withStyles(styles)(({ classes, record }) => {
  return (
    <Button
      className={classes.button}
      variant="contained"
      component={Link}
      to={{
        pathname: '/topic/create',
        state: {
          session_id: record ? record.id : null,
        },
      }}
      label="Dodaj temat od sesji"
    >
      <SpeakerNotesIcon />
    </Button>
  )
})

const SessionShowActions = ({ basePath, data }) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />
    &emsp;
    <AddNewCommentButton basePath={basePath} record={data} />
  </TopToolbar>
)

const SessionShow = (props) => (
  <Show {...props} actions={<SessionShowActions />}>
    <TabbedShowLayout>
      <Tab label="sesja">
        <TextField source="name" emptyText="&mdash;" />
        <ReferenceField label="mówca" source="speaker_id" reference="speaker" emptyText="&mdash;">
          <TextField source="name" />
        </ReferenceField>
        <FunctionField
          label="data i godzina"
          render={(record) =>
            `${moment(record['begins_at']).format('D MMMM, dddd, [od] HH:mm')}${
              record['ends_at'] ? ` do ${moment(record['ends_at']).format('HH:mm')}` : ''
            }`
          }
        />
        <TextField source="location" emptyText="&mdash;" />
        <ReferenceManyField reference="topic" target="session_id" label="tematy">
          <Total />
        </ReferenceManyField>
      </Tab>
      <Tab label="tematy" path="topics">
        <ReferenceManyField reference="topic" target="session_id" addLabel={false}>
          <Datagrid>
            <TextField source="subject" emptyText="&mdash;" />
            <TextField source="speaker" emptyText="&mdash;" />
            <TextField source="location" emptyText="&mdash;" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddNewCommentBottomButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
)

export default SessionShow
