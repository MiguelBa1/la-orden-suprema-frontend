import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem } from '@pages/assassin'
import { MissionStatusLabel } from '@pages/admin'
import { MissionStatus } from '@models/enums'

export const MissionTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Estado', key: 'status', render: (record) => (
    <MissionStatusLabel status={ record.status } className="inline-block w-24"/>
  ) },
  { title: 'Asignada a', key: 'assigned_to', render: (_record) => {
    return _record.assigned_to?.name
  } },
  { title: 'Acciones', key: 'actions', render: (_record) => {
    const buttonText = {
      [MissionStatus.CREATED]: 'Abrir',
      [MissionStatus.ASSIGNED]: 'Abrir',
      [MissionStatus.COMPLETED]: 'Revisar',
      [MissionStatus.PAID]: 'Abrir',
      [MissionStatus.PUBLISHED]: 'Abrir',
      [MissionStatus.REJECTED]: 'Abrir',
    }

    return (
      <NavLink to={ `assassin/missions/${ _record.id }` }>
        <Button variant="tertiary">
          { buttonText[_record.status] }
        </Button>
      </NavLink>
    )
  } },
]
