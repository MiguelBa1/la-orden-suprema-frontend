import { Column } from '@components/UI'
import { TransactionMovementTranslations, TransactionItem } from '@pages/admin/transactions'

export const TransactionTableColumns: Column<TransactionItem>[] = [
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Movimiento', dataIndex: 'transaction', key: 'transaction', render: (record) => (
    <span>{ TransactionMovementTranslations[record.transaction] }</span>
  ) },
  { title: 'Cantidad', dataIndex: 'amount', key: 'amount' },
  { title: 'Fecha', dataIndex: 'date', key: 'date' },
]


