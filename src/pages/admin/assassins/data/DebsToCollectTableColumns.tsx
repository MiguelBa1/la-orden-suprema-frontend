import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebsToCollect } from '@pages/admin/assassins'

export const DebsToCollectTableColumns: Column<DebsToCollect>[] = [
  {
    title: 'Deudor',
    dataIndex: 'debtor',
    key: 'debtor',
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
