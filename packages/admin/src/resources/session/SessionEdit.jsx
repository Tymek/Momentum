import { Edit, SimpleForm, TextInput, required } from 'react-admin'
import DateTimeInput from 'components/DateTimeInput'

const SessionEdit = (props) => (
  <Edit {...props} title="Edytuj sesję">
    <SimpleForm>
      <TextInput source="name" />
      <DateTimeInput source="begins_at" validate={[required()]} />
      <DateTimeInput source="ends_at" />
      <TextInput source="speaker" />
    </SimpleForm>
  </Edit>
)

export default SessionEdit
