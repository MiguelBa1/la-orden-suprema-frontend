import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Button} from '@components/UI'
import { TransactionListTable, getTransactionsList} from '@pages/assassin/transactions'
import { InputField } from '@components/Forms'
import { BuyCoinsModal, SellCoinsModal } from '@pages/assassin/transactions/components'

export function TransactionListView() {
  

  const [showBuyCoinsModal, setShowBuyCoinsModal] = useState(false)

  const [showSellCoinsModal, setShowSellCoinsModal] = useState(false)

  const TransactionListQuery = useQuery({
    queryKey: ['missions'],
    queryFn: () => getTransactionsList(),
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
      <div className="flex justify-left items-center">
        <Button onClick={ () => setShowBuyCoinsModal(true) }>
          Comprar Monedas
        </Button>
        <Button className="ml-6" onClick={ () => setShowSellCoinsModal(true) }>
          Vender Monedas
        </Button>
      </div>
      <TransactionListTable transactionListQuery={ TransactionListQuery } />
      <BuyCoinsModal
        isOpen={ showBuyCoinsModal }
        onClose={ () => setShowBuyCoinsModal(false) }
        refetchTransactions={ TransactionListQuery.refetch }
      />
      <SellCoinsModal
        isOpen={ showSellCoinsModal }
        onClose={ () => setShowSellCoinsModal(false) }
        refetchTransactions={ TransactionListQuery.refetch }
      />
    </div>
  )
}
