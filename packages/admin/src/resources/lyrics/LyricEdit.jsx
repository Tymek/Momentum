import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  required,
  SelectInput,
  NumberInput,
} from 'react-admin'

const LyricEdit = (props) => (
  <Edit {...props} title="Edytuj zwrotkę">
    <SimpleForm redirect="list">
      <ReferenceInput
        reference="song"
        source="song_id"
        label="piosenka"
        validate={[required()]}
        orderBy="order"
      >
        <SelectInput
          optionText={(record) => `${record.title || record.original_title} - ${record.author}`}
        />
      </ReferenceInput>
      <TextInput source="header" />
      <TextInput source="content" multiline />
      <NumberInput source="order" />
    </SimpleForm>
  </Edit>
)

export default LyricEdit
