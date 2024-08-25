import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { AssassinItem } from '@pages/admin'

export const AssassinsTableColumns: Column<AssassinItem>[] = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Nombre', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Pseudónimo', dataIndex: 'alias', key: 'alias' },
  { title: 'Estado', dataIndex: 'status', key: 'status' },
  { title: 'País', dataIndex: 'country', key: 'country' },
  { title: 'Acciones', key: 'actions', render: (record) => (
    <NavLink to={ `/app/admin/assassins/${ record.id }` }>
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) },
]
