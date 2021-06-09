import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  SimpleShowLayout,
  FunctionField,
  RichTextField,
} from 'react-admin'
import moment from 'utils/moment'

const formatSession = (record) =>
  `${moment(record['begins_at']).format('dddd, HH:mm')}${
    record['ends_at'] ? `-${moment(record['ends_at']).format('HH:mm')}` : ''
  }${record['name'] ? ` – ${record['name']}` : ''}`

const TopicList = (props) => (
  <List {...props} title="Lista tematów" exporter={false} bulkActionButtons={false}>
    <Datagrid
      rowClick="edit"
      expand={
        <SimpleShowLayout>
          <RichTextField source="description" emptyText="&mdash;" />
          {/* <RelativeTimeField label="zaktualizowano" source="updated_at" />
					<RelativeTimeField label="utworzono" source="created_at" /> */}
        </SimpleShowLayout>
      }
    >
      <TextField source="subject" />
      <ReferenceField
        label="sesja"
        source="session_id"
        reference="session"
        link="show"
        sortBy="session.begins_at"
      >
        <FunctionField render={formatSession} />
      </ReferenceField>
      <TextField source="speaker" emptyText="&mdash;" />
      {/* <RelativeTimeField label="zaktualizowano" source="updated_at" /> */}
      <TextField source="location" emptyText="&mdash;" />
    </Datagrid>
  </List>
)

export default TopicList
