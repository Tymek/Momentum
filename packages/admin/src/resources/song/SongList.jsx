import { Datagrid, List, TextField } from 'react-admin'

const SongList = (props) => (
  <List
    {...props}
    title="Lista piosenek"
    exporter={false}
    bulkActionButtons={false}
    sort={{ field: 'order', order: 'ASC' }}
  >
    <Datagrid rowClick="edit">
      <TextField source="title" emptyText="&mdash;" />
      <TextField source="original_title" />
      <TextField source="author" />
      <TextField source="order" emptyText="&mdash;" />
    </Datagrid>
  </List>
)

export default SongList
