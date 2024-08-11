import { TransactionMovement } from '@pages/admin/transactions'

export const TransactionListMock = [
  {
    description: 'Compra monedas',
    movement: TransactionMovement.INPUT,
    amount: '+200',
    date: '08/01/2024',
  },
  {
    description: 'Creación misión',
    movement: TransactionMovement.OUTPUT,
    amount: '-50',
    date: '07/01/2024',
  },
  {
    description: 'Compra monedas',
    movement: TransactionMovement.INPUT,
    amount: '+300',
    date: '06/01/2024',
  },
  {
    description: 'Creación misión',
    movement: TransactionMovement.OUTPUT,
    amount: '-500',
    date: '07/01/2024',
  },
  {
    description: 'Compra monedas',
    movement: TransactionMovement.INPUT,
    amount: '+400',
    date: '05/01/2024',
  },
]
