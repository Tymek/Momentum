import { SimpleForm, TextInput, Create, required, ReferenceInput, SelectInput } from 'react-admin'
import DateTimeInput from 'components/DateTimeInput'

const SessionCreate = (props) => (
  <Create {...props} title="Dodaj sesję">
    <SimpleForm>
      <TextInput source="name" />
      <DateTimeInput source="begins_at" validate={[required()]} />
      <DateTimeInput source="ends_at" />
      <ReferenceInput label="mówca" source="speaker_id" reference="speaker" resettable>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export default SessionCreate
