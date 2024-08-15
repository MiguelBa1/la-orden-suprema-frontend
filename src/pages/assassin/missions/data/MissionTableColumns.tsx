import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem } from '@pages/assassin'

export const MissionTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Creado por', key: 'created_by', render: (_record) => {
    return _record.created_by.name
  } },
  { title: 'Acciones', key: 'actions', render: (_record) => {
    return (
      <NavLink to={ `assassin/missions/${ _record.id }` }>
        <Button variant="tertiary">
          Abrir
        </Button>
      </NavLink>
    )
  } },
]
