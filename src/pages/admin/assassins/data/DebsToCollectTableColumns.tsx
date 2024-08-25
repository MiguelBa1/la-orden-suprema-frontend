import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebsToCollect } from '@pages/admin/assassins'

export const DebsToCollectTableColumns: Column<DebsToCollect>[] = [
  { title: 'Deudor', key: 'createdBy', render: (record) => (
    <NavLink to={ `/app/admin/assassins/${record.createdBy.id}` } className="text-blue-500 hover:underline">
      { record.createdBy.name }
    </NavLink>
  ) },
  { title: 'Misión asociada', key: 'mission', render: (_record) => (
    <NavLink to="/app/admin/missions/1">
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) }
]
