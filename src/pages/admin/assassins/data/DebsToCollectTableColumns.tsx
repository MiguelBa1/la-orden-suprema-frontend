import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebsToCollect } from '@pages/admin/assassins'

export const DebsToCollectTableColumns: Column<DebsToCollect>[] = [
  {
    title: 'Deudor',
    key: 'debtor',
    render: (record) => (
      <NavLink
        to={ `/app/admin/assassins/${record.debtor.id}` }
        className="text-blue-500 hover:underline"
      >
        { record.debtor.name }
      </NavLink>
    )
  },
  {
    title: 'Misión asociada',
    key: 'mission',
    render: (_record) => (
      <NavLink to="#">
        <Button variant="tertiary">Abrir</Button>
      </NavLink>
    )
  }
]
