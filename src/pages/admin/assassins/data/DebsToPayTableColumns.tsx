import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebsToPay } from '@pages/admin/assassins'

export const DebsToPayTableColumns: Column<DebsToPay>[] = [
  {
    title: 'Acreedor',
    key: 'creditor',
    render: (record) => (
      <NavLink
        to={ `/app/admin/assassins/${record.creditor.id}` }
        className="text-blue-500 hover:underline"
      >
        { record.creditor.name }
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
