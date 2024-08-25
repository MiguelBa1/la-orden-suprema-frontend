import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type MissionHistory } from '@pages/admin/assassins'
import { MissionStatusLabel } from '@pages/admin'

export const MissionsHistoryTableColumns: Column<MissionHistory>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Estado', key: 'status', render: (record) => (
    <MissionStatusLabel status={ record.status }/>
  ) },
  { title: 'Creador', dataIndex: 'createdBy', key: 'createdBy' },
  { title: 'Acciones', key: 'actions', render: () => (
    <NavLink to="/app/admin/missions/1">
      <Button variant="tertiary">Abrir</Button>
    </NavLink>
  ) },
]
