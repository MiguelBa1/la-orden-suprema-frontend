import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { GeneralMissionItem } from '@pages/assassin'

export const GeneralMissionsTableColumns: Column<GeneralMissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Creador', dataIndex: 'createdBy', key: 'createdBy' },
  { title: 'Acciones', key: 'actions', render: (_record) => {
    return (
      <NavLink to={ `/app/assassin/missions/${ _record._id }` }>
        <Button variant="tertiary">
          Abrir
        </Button>
      </NavLink>
    )
  } },
]
