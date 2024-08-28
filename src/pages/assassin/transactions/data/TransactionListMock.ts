import { TransactionMovement } from '../models/enums/TransactionMovement'
import { TransactionList } from '@pages/assassin'

export const TransactionListMock: TransactionList = [
  {
    description: 'Compra monedas',
    transaction: TransactionMovement.INCOME,
    amount: '+200',
    date: '08/01/2024',
  },
  {
    description: 'Creación misión',
    transaction: TransactionMovement.OUTCOME,
    amount: '-50',
    date: '07/01/2024',
  },
  {
    description: 'Compra monedas',
    transaction: TransactionMovement.INCOME,
    amount: '+300',
    date: '06/01/2024',
  },
  {
    description: 'Creación misión',
    transaction: TransactionMovement.OUTCOME,
    amount: '-500',
    date: '07/01/2024',
  },
  {
    description: 'Compra monedas',
    transaction: TransactionMovement.INCOME,
    amount: '+400',
    date: '05/01/2024',
  },
]
