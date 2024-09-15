import dayjs from 'dayjs'
import { Column } from '@components/UI'
import { TransactionItem } from '@pages/admin/transactions'

export const TransactionTableColumns: Column<TransactionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Movimiento', dataIndex: 'type', key: 'transaction' },
  { title: 'Cantidad', dataIndex: 'amount', key: 'amount', render: record => {
    return record.type === 'Entrada' ? `+${record.amount}` : `-${record.amount}`
  } },
  { title: 'Fecha', dataIndex: 'date', key: 'date', render: record => {
    return dayjs(record.date).format('DD/MM/YYYY HH:mm')
  } }
]


