import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebsToPay } from '@pages/admin/assassins'

export const DebsToPayTableColumns: Column<DebsToPay>[] = [
  { title: 'Acreedor', key: 'assignedTo', render: (record) => (
    <NavLink to={ `/app/admin/assassins/${record.assignedTo.id}` } className="text-blue-500 hover:underline">
      { record.assignedTo.name }
    </NavLink>
  ) },
  { title: 'Misión asociada', key: 'mission', render: (_record) => (
    <NavLink to="/app/admin/missions/1">
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) }
]
