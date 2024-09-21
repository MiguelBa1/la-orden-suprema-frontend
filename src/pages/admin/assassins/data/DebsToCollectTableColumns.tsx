import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebtsToCollect } from '@pages/admin/assassins'

export const DebsToCollectTableColumns: Column<DebtsToCollect>[] = [
  { title: 'A quien se le cobra', key: 'createdBy', render: (record) => (
    <NavLink to={ `/app/admin/assassins/${record.createdBy._id}` } className="text-blue-500 hover:underline">
      { record.createdBy.name }
    </NavLink>
  ) },
  { title: 'Misión deuda', key: 'missionId', render: (record) => (
    <NavLink to={ `/app/admin/missions/${record.missionId}` }>
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) },
  { title: 'Misión cobro', key: 'missionId', render: (record) => (
    <NavLink to={ `/app/admin/missions/${record.missionId}` }>
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) }
]
