import { Create, NumberInput, SimpleForm, TextInput, required } from 'react-admin'

const SongCreate = (props) => (
  <Create {...props} title="Dodaj piosenkę">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="original_title" validate={[required()]} />
      <TextInput source="author" validate={[required()]} />
      <NumberInput source="order" validate={[required()]} />
    </SimpleForm>
  </Create>
)

export default SongCreate
