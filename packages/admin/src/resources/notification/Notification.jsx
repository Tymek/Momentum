import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  SimpleForm,
  TextInput,
  Create,
  DeleteButton,
  // BooleanInput, // TODO: is_sent
  Edit,
} from 'react-admin'
import moment from 'utils/moment'
import DateTimeInput from 'components/DateTimeInput'
import { DateTimeField } from 'components/fields'

export const NotificationList = (props) => (
  <List
    {...props}
    // empty={<Empty />}
    title="Lista powiadomień"
    exporter={false}
    bulkActionButtons={false}
    sort={{ field: 'scheduled_at', order: 'DESC' }}
  >
    <Datagrid rowClick="show">
      <DateTimeField source="scheduled_at" format="dddd, D MMMM, HH:mm" withRelative />
      <TextField source="title" emptyText="&mdash;" />
      {/* <TextField source="content" emptyText="&mdash;" /> */}
      <FunctionField
        label="treść"
        render={(record) => (
          <div
            style={{
              maxWidth: '24rem',
              wordWrap: 'break-word',
              maxHeight: '2.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
            }}
          >
            {record['content']}
          </div>
        )}
      />
      <DeleteButton undoable={false} />
    </Datagrid>
  </List>
)

export const NotificationCreate = (props) => (
  <Create {...props} title="Dodaj powiadomienie">
    <SimpleForm redirect="list">
      <TextInput source="title" />
      <TextInput source="content" multiline />
      <DateTimeInput source="scheduled_at" defaultValue={moment().toISOString()} />
    </SimpleForm>
  </Create>
)

export const NotificationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="title" />
      <TextInput source="content" multiline />
      <DateTimeInput source="scheduled_at" defaultValue={moment().toISOString()} />
    </SimpleForm>
  </Edit>
)
