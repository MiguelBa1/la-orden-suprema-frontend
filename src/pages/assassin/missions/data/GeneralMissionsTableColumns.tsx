import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem } from '@pages/assassin'

export const GeneralMissionsTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
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
