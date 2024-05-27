import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { type MissionHistory } from '@pages/admin/assassins'

export const MissionsHistoryTableColumns: Column<MissionHistory>[] = [
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status',
    render: (record) => {
      const formattedStatus = {
        completed: 'Completada',
        failed: 'Fallida',
        assigned: 'Asignada',
        paid: 'Pagada'
      }

      return formattedStatus[record.status]
    }
  },
  {
    title: 'Creador',
    dataIndex: 'creator',
    key: 'creator',
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: () => (
      <NavLink to="#">
        <Button variant="tertiary">Abrir</Button>
      </NavLink>
    )
  },
]
