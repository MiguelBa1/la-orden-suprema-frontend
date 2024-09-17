import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem, MissionStatusLabel } from '@pages/admin'
import { MissionStatus } from '@models/enums'

export const MissionsTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Estado', key: 'status', render: (record) => (
    <MissionStatusLabel status={ record.status }/>
  ) },
  { title: 'Creador', dataIndex: 'createdBy', key: 'createdBy' },
  { title: 'Asignado a', dataIndex: 'assignedTo', key: 'assignedTo' },
  { title: 'Acciones', key: 'actions', render: (_record) => {
    const buttonText = {
      [MissionStatus.CREATED]: 'Revisar',
      [MissionStatus.ASSIGNED]: 'Abrir',
      [MissionStatus.COMPLETED]: 'Revisar',
      [MissionStatus.PAID]: 'Abrir',
      [MissionStatus.PUBLISHED]: 'Abrir',
      [MissionStatus.REJECTED]: 'Abrir',
    }

    return (
      <NavLink to={ `/app/admin/missions/${ _record._id }` }>
        <Button variant="tertiary">
          { buttonText[_record.status] }
        </Button>
      </NavLink>
    )
  } },
]
