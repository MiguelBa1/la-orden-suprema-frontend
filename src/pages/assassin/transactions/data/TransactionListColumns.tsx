import { Column } from '@components/UI'
import {TransactionItem } from '@pages/assassin/transactions'
import dayjs from 'dayjs'

export const TransactionTableColumns: Column<TransactionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Movimiento', dataIndex: 'type', key: 'transaction' },
  { title: 'Cantidad', dataIndex: 'amount', key: 'amount' },
  { title: 'Fecha', dataIndex: 'date', key: 'date', render: record => {
    return dayjs(record.date).format('DD/MM/YYYY HH:mm')
  } }
]


