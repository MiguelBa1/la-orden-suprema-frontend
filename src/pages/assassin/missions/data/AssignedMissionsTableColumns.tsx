import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem } from '@pages/assassin'
import { MissionStatusLabel } from '@pages/admin'

export const AssignedMissionsTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Estado', key: 'status', render: (record) => (
    <MissionStatusLabel status={ record.status }/>
  ) },
  { title: 'Creado por', dataIndex: 'createdBy', key: 'createdBy' },
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
