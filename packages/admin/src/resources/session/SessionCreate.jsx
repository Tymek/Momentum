import { SimpleForm, TextInput, Create, required } from 'react-admin'
import DateTimeInput from 'components/DateTimeInput'

const SessionCreate = (props) => (
  <Create {...props} title="Dodaj sesję">
    <SimpleForm>
      <TextInput source="name" />
      <DateTimeInput source="begins_at" validate={[required()]} />
      <DateTimeInput source="ends_at" />
      <TextInput source="speaker" />
    </SimpleForm>
  </Create>
)

export default SessionCreate
