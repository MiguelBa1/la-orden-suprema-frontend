import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Button} from '@components/UI'
import { TransactionListTable, getTransactionsList} from '@pages/assassin/transactions'
import { InputField } from '@components/Forms'
import { BuyCoinsModal, SellCoinsModal } from '@pages/assassin/transactions/components'

export function TransactionListView() {
  const searchForm = useForm()

  const [showBuyCoinsModal, setShowBuyCoinsModal] = useState(false)
  const { register } = useForm({
    defaultValues: {
      coins: 500,
    },
  })

  const [showSellCoinsModal, setShowSellCoinsModal] = useState(false)

  const TransactionListQuery = useQuery(
    {
      queryKey: ['missions', searchForm.getValues()],
      queryFn: () => getTransactionsList(searchForm.getValues()),
    }
  )

  return (
    <div className="space-y-6">
      <h1 className="text-2xl lg:text-3xl">Transacciones</h1>
      <div className="flex flex-col gap-1 w-[300px]">
        <InputField
          id="coins"
          type="number"
          placeholder="coins"
          disabled
          registration= { register('coins') }
        />   
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg lg:text-xl">
             
          </h2>
        </div>
        <div className="flex justify-left items-center">
          <Button
            onClick={
              () => setShowBuyCoinsModal(true)
            }>
            Comprar Monedas
          </Button>
          <Button
            className="ml-6"
            onClick={
              () => setShowSellCoinsModal(true)
            }>
            Vender Monedas
          </Button>
        </div>
      </div>
      <TransactionListTable transactionListQuery={ TransactionListQuery } />
      <BuyCoinsModal isOpen={ showBuyCoinsModal } onClose={ () => setShowBuyCoinsModal(false) } />
      <SellCoinsModal isOpen={ showSellCoinsModal } onClose={ () => setShowSellCoinsModal(false) } />
    </div>
  )
}
