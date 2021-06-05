import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  SimpleShowLayout,
  FunctionField,
  RichTextField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  required,
} from 'react-admin'
import moment from 'utils/moment'
// import { RelativeTimeField } from './fields'

const locations = [
  { id: 'Sala Główna', name: 'Sala Główna' },
  { id: 'Łuczniczka', name: 'Łuczniczka' },
  { id: 'Staff Room', name: 'Staff Room' },
]

const formatSession = (record) =>
  `${moment(record['begins_at']).format('dddd, HH:mm')}${
    record['ends_at'] ? `-${moment(record['ends_at']).format('HH:mm')}` : ''
  }${record['name'] ? ` – ${record['name']}` : ''}`

export const TopicList = (props) => (
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

export const TopicEdit = (
  props, // TODO: redirect to session?
) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput
        label="sesja"
        source="session_id"
        reference="session"
        sort={{
          field: 'begins_at',
          order: 'ASC',
        }}
        perPage={Number.POSITIVE_INFINITY}
      >
        <SelectInput optionText={formatSession} />
      </ReferenceInput>
      <TextInput source="subject" multiline />
      <TextInput source="description" multiline />
      <SelectInput
        source="location"
        label="lokalizacja"
        style={{ width: '256px' }}
        choices={locations}
        resettable
      />
      <ReferenceInput label="mówca" source="speaker_id" reference="speaker" resettable>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export const TopicCreate = (props) => {
  const defaultValue = props.location && props.location.state ? props.location.state : {}
  const sessionId = defaultValue.session_id
  const redirect = sessionId ? `/session/${sessionId}/show/topics` : 'show'

  return (
    <Create {...props}>
      <SimpleForm defaultValue={defaultValue} redirect={redirect}>
        <ReferenceInput
          label="sesja"
          source="session_id"
          reference="session"
          perPage={Number.POSITIVE_INFINITY}
          validate={[required()]}
          required
          disabled={!!sessionId}
          sort={{
            field: 'begins_at',
            order: 'ASC',
          }}
        >
          <SelectInput optionText={formatSession} />
        </ReferenceInput>
        <TextInput source="subject" multiline />
        <TextInput source="description" multiline />
        <SelectInput
          source="location"
          label="lokalizacja"
          style={{ width: '256px' }}
          choices={locations}
          resettable
        />
        <ReferenceInput label="mówca" source="speaker_id" reference="speaker" resettable>
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
