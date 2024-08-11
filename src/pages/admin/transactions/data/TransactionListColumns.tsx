import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { MissionItem, MissionStatus, missionStatusTranslations } from '@pages/admin'


export const TransactionTableColumns: Column<MissionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Movimiento', dataIndex: 'transaction', key: 'transaction', render: (record) => (
    <span>{ missionStatusTranslations[record.status] }</span>
  ) },
  { title: 'Cantidad', dataIndex: 'amount', key: 'amount' },
  { title: 'Fecha', dataIndex: 'date', key: 'date' },
  
]


