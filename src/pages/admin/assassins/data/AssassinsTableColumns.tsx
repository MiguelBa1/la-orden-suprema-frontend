import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { AssassinItem } from '@pages/admin'
import { assassinStatusTranslations } from '@utils/index'

export const AssassinsTableColumns: Column<AssassinItem>[] = [
  { title: 'Nombre', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Pseudónimo', dataIndex: 'alias', key: 'alias' },
  { title: 'Estado', dataIndex: 'status', key: 'status', render: (record) => (
    <span>{ assassinStatusTranslations[record.status] }</span>
  ) },
  { title: 'País', dataIndex: 'country', key: 'country' },
  { title: 'Acciones', key: 'actions', render: (record) => (
    <NavLink to={ `/app/admin/assassins/${ record._id }` }>
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) },
]
