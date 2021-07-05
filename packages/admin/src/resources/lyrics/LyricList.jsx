import { Datagrid, FunctionField, List, ReferenceField, TextField } from 'react-admin'
import { styled } from '@material-ui/core/styles'

const BreakableTextField = styled(TextField)({
  'white-space': 'pre-line',
})

const LyricList = (props) => (
  <List
    {...props}
    title="Lista zwrotek"
    exporter={false}
    bulkActionButtons={false}
    sort={{ field: 'song_id', order: 'ASC' }}
  >
    <Datagrid rowClick="edit">
      <ReferenceField reference="song" source="song_id" label="piosenka">
        <FunctionField render={(record) => record.title || record.original_title} />
      </ReferenceField>
      <TextField source="header" emptyText="&mdash;" />
      <BreakableTextField source="content" emptyText="&mdash;" />
    </Datagrid>
  </List>
)

export default LyricList
