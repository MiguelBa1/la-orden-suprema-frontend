import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type DebtsToPay } from '@pages/admin/assassins'

export const DebsToPayTableColumns: Column<DebtsToPay>[] = [
  { title: 'A quien se le debe', key: 'assignedTo', render: (record) => (
    record.paidTo && (
      <NavLink to={ `/app/admin/assassins/${record.paidTo?._id}` } className="text-blue-500 hover:underline">
        { record.paidTo?.name }
      </NavLink>
    )
  ) },
  { title: 'Misión deuda', key: 'createdMission', render: (record) => (
    <NavLink to={ `/app/admin/missions/${record.createdMission}` }>
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) },
  { title: 'Misión cobro', key: 'paidMission', render: (record) => (
    record.paidMission && (
      <NavLink to={ `/app/admin/missions/${record.paidMission}` }>
        <Button variant="tertiary">Abrir</Button>
      </NavLink>
    )
  ) }
]
