import { List, Datagrid, TextField, ReferenceManyField } from 'react-admin'
import { RelativeTimeField, DateTimeField, TimeField } from '../../components/fields'

const Total = (props) => <span>{props.total || <>&mdash;</>}</span>

const SessionList = (props) => (
  <List
    {...props}
    title="Lista sesji"
    exporter={false}
    bulkActionButtons={false}
    sort={{ field: 'begins_at', order: 'ASC' }}
  >
    <Datagrid rowClick="show">
      {/* <TextField source="id" /> */}
      <DateTimeField showTime source="begins_at" />
      <TimeField showTime source="ends_at" emptyText="&mdash;" />
      <TextField source="name" emptyText="&mdash;" />
      <ReferenceManyField sortable={false} reference="topic" target="session_id" label="tematy">
        <Total />
      </ReferenceManyField>
      {/* <TextField source="speaker" emptyText="&mdash;" /> */}
      <RelativeTimeField source="updated_at" />
    </Datagrid>
  </List>
)

export default SessionList
