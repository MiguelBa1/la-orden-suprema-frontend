import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem, MissionStatusLabel } from '@pages/admin'
import { MissionStatus } from '@models/enums'

export const MissionsTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Estado', dataIndex: 'status', key: 'status', render: (record) => (
    <MissionStatusLabel status={ record.status }/>
  ) },
  { title: 'Creado por', dataIndex: 'createdBy', key: 'createdBy' },
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
      <NavLink to={ `/app/admin/missions/${ _record.id }` }>
        <Button variant="tertiary">
          { buttonText[_record.status] }
        </Button>
      </NavLink>
    )
  } },
]
