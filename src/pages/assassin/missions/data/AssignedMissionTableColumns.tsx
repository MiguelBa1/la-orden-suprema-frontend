import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem } from '@pages/assassin'
import { MissionStatusLabel } from '@pages/admin'

export const AssignedMissionTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Estado', key: 'status', render: (record) => (
    <MissionStatusLabel status={ record.status }/>
  ) },
  { title: 'Creado por', key: 'created_by', render: (_record) => {
    return _record.created_by.name
  } },
  { title: 'Acciones', key: 'actions', render: (_record) => {
    return (
      <NavLink to={ `/app/assassin/missions/${ _record.id }` }>
        <Button variant="tertiary">
            Abrir
        </Button>
      </NavLink>
    )
  } },
]
