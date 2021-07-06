import {
  Datagrid,
  Edit,
  FormTab,
  FunctionField,
  NumberField,
  NumberInput,
  ReferenceManyField,
  required,
  RichTextField,
  SimpleShowLayout,
  TabbedForm,
  TextField,
  TextInput,
} from 'react-admin'

const SongEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Piosenka">
        <TextInput source="title" />
        <TextInput source="original_title" validate={[required()]} />
        <TextInput source="author" validate={[required()]} />
        <NumberInput source="order" validate={[required()]} />
      </FormTab>
      <FormTab label="Tekst">
        <ReferenceManyField reference="lyric" target="song_id" addLabel={false} sortBy="order">
          <Datagrid rowClick="edit">
            <TextField source="header" />
            <FunctionField render={(record) => (record.content || '').slice(0, 120) + '...'} />
            <NumberField source="order" validate={[required()]} />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
)

export default SongEdit
