import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebsToPay } from '@pages/admin/assassins'


export const DebsToPayTableColumns: Column<DebsToPay>[] = [
  {
    title: 'Acreedor',
    dataIndex: 'creditor',
    key: 'creditor',
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
