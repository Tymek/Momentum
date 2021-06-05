import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  Create,
  Edit,
  SelectInput,
  FunctionField,
} from 'react-admin'
// import moment from 'utils/moment'
// import DateTimeInput from 'components/DateTimeInput'
// import { DateTimeField } from 'components/fields'

const images = [
  { id: 'ania-greenwood.jpg', name: 'ania-greenwood.jpg' },
  { id: 'augustyniaki.jpg', name: 'augustyniaki.jpg' },
  { id: 'biskup.jpg', name: 'biskup.jpg' },
  { id: 'dominik-tomaszewski.jpg', name: 'dominik-tomaszewski.jpg' },
  { id: 'ewa-wasilewska-kaminska.jpg', name: 'ewa-wasilewska-kaminska.jpg' },
  { id: 'jacek-gromadzki.jpg', name: 'jacek-gromadzki.jpg' },
  { id: 'kuzynin.jpg', name: 'kuzynin.jpg' },
  { id: 'luiz-f-cardoso.jpg', name: 'luiz-f-cardoso.jpg' },
  { id: 'luke-greenwood.jpg', name: 'luke-greenwood.jpg' },
  { id: 'malgorzata-bieniaszewska.jpg', name: 'malgorzata-bieniaszewska.jpg' },
  { id: 'marciniaki.jpg', name: 'marciniaki.jpg' },
  { id: 'marcin-lindner.jpg', name: 'marcin-lindner.jpg' },
  { id: 'maria-marszalek.jpg', name: 'maria-marszalek.jpg' },
  { id: 'marysia-lindner.jpg', name: 'marysia-lindner.jpg' },
  { id: 'tomaszewscy.jpg', name: 'tomaszewscy.jpg' },
  { id: 'weronika-butowicz.jpg', name: 'weronika-butowicz.jpg' },
  { id: 'zbyszek-zarozny.jpeg', name: 'zbyszek-zarozny.jpeg' },
]

export const SpeakerList = (props) => (
  <List
    {...props}
    // empty={<Empty />}
    title="Lista mówców"
    exporter={false}
    bulkActionButtons={false}
    // sort={{ field: 'published_at', order: 'DESC' }}
  >
    <Datagrid rowClick="show">
      {/* <DateTimeField source="created_at" format="dddd, D MMMM, HH:mm" withRelative /> */}
      <TextField source="name" emptyText="&mdash;" />
      {/* <TextField source="content" emptyText="&mdash;" /> */}
      <FunctionField
        label="opis"
        render={(record) => (
          <div
            style={{
              maxWidth: '42rem',
              wordWrap: 'break-word',
              maxHeight: '2.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
            }}
          >
            {record['description']}
          </div>
        )}
      />
      {/* <DeleteButton undoable={false} /> */}
    </Datagrid>
  </List>
)

export const SpeakerCreate = (props) => (
  <Create {...props} title="Dodaj powiadomienie">
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <TextInput source="description" multiline />
      <SelectInput source="image" style={{ width: '256px' }} choices={images} resettable />
    </SimpleForm>
  </Create>
)

export const SpeakerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <TextInput source="description" multiline />
      <SelectInput source="image" style={{ width: '256px' }} choices={images} resettable />
    </SimpleForm>
  </Edit>
)
