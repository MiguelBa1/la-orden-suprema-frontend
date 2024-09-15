import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Button} from '@components/UI'
import { TransactionListTable, getTransactionsList} from '@pages/admin/transactions'
import { InputField } from '@components/Forms'
import { BuyCoinsModal } from '@pages/admin/transactions/components'

export function TransactionListView() {

  const [showBuyCoinsModal, setShowBuyCoinsModal] = useState(false)

  const TransactionListQuery = useQuery({
    queryKey: ['missions'],
    queryFn: () => getTransactionsList(),
    staleTime: 1000 * 60,
  })

  const { register } = useForm({
    values: { coins: TransactionListQuery.data?.coins }
  })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl lg:text-3xl">Transacciones</h1>
      <div className="flex flex-col gap-1 w-[300px]">
        <InputField
          id="coins"
          name="coins"
          label="Monedas disponibles"
          type="number"
          placeholder="coins"
          disabled
          registration= { register('coins') }
        />   
      </div>
      <Button onClick={ () => setShowBuyCoinsModal(true) }>
        Comprar Monedas
      </Button>
      <TransactionListTable transactionListQuery={ TransactionListQuery } />
      <BuyCoinsModal isOpen={ showBuyCoinsModal } onClose={ () => setShowBuyCoinsModal(false) } />
    </div>
  )
}
