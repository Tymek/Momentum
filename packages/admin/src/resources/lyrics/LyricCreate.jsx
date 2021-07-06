import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
} from 'react-admin'

const LyricCreate = (props) => {
  return (
    <Create {...props} title="Dodaj zwrotkę">
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
    </Create>
  )
}

export default LyricCreate
