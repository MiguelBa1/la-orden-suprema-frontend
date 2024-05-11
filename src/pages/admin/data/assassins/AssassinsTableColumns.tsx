import { Column } from '@components/UI'
import { Assassin } from '@pages/admin/data'
import { ActionButton } from '@pages/admin/components/assassins'

export const AssassinsTableColumns: Column<Assassin>[] = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Nombre', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Alias', dataIndex: 'alias', key: 'alias' },
  { title: 'Teléfono', dataIndex: 'phone', key: 'phone' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'País', dataIndex: 'country', key: 'country' },
  { title: 'Acciones', key: 'actions', render: (record) => <ActionButton assassinsId={ record.id } /> },
]
