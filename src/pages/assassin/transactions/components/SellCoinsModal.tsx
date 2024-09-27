import { useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useQuery, useMutation, UseQueryResult } from '@tanstack/react-query'
import { Modal, Button } from '@components/UI'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { useToastStore } from '@stores/useToastStore'
import { getConfiguration } from '@services/index'
import { sellCoins } from '@pages/assassin'

type SellCoinsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    refetchTransactions: UseQueryResult['refetch'];
};

export function SellCoinsModal({ isOpen, onClose, refetchTransactions }: SellCoinsModalProps) {
  const { addToast } = useToastStore()

  const { data: configuration } = useQuery({
    queryKey: ['configuration'],
    queryFn: getConfiguration,
    staleTime: 1000 * 60,
  })

  const sellCoinsMutation = useMutation({
    mutationFn: sellCoins,
    onSuccess: async (data) => {
      onClose()
      addToast({ message: data.message, type: 'success' })
      await refetchTransactions()
    },
    onError: (error) => {
      onClose()
      addToast({ message: error.message, type: 'error' })
    },
  })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues: { coins: 0, usd: 0 } })

  const coinsValue = watch('coins', 0)

  useEffect(() => {
    if (!configuration) return
    const usd =coinsValue * configuration.MONEY_PER_COIN
    setValue('usd', usd)
  }, [coinsValue, setValue, configuration])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await sellCoinsMutation.mutateAsync(Number(data.coins))
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Vender Monedas"
      footerButtons={
        <>
          <Button onClick={ onClose } variant="tertiary">
            Cancelar
          </Button>
          <Button onClick={ handleSubmit(onSubmit) }>
            Vender
          </Button>
        </>
      }
    >
      <form className="flex items-center gap-2 mt-4">
        <div className="w-full">
          <label htmlFor="usd" className="block text-sm font-medium text-gray-700 mb-1">
            Monedas
          </label>
          <input
            id="coins"
            type="number"
            { ...register('coins', {
              required: 'Este campo es requerido',
              min: { value: 1, message: 'El valor mínimo es 1' }
            }) }
            className="relative w-full bg-white border rounded-md shadow-sm px-3 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm"
            min={ 0 }
          />
        </div>
        <ArrowRightIcon className="w-12 h-12 mt-6" />
        <div className="w-full">
          <label htmlFor="coins" className="block text-sm font-medium text-gray-700 mb-1">
            Dinero (USD)
          </label>
          <input
            id="usd"
            type="number"
            placeholder="$"
            { ...register('usd') }
            className="relative w-full bg-white border rounded-md shadow-sm px-3 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm disabled:bg-gray-200 disabled:cursor-not-allowed"
            disabled
          />
        </div>
      </form>
      { errors.coins && <p className="mt-1 text-sm text-red-600">{ errors.coins.message }</p> }
    </Modal>
  )
}
