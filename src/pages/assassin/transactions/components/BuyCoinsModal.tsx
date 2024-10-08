import { useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useQuery, useMutation, UseQueryResult } from '@tanstack/react-query'
import { Modal, Button } from '@components/UI'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { useToastStore } from '@stores/useToastStore'
import { buyCoins } from '@pages/admin'
import { getConfiguration } from '@services/index'

type BuyCoinsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    refetchTransactions: UseQueryResult['refetch'];
};

export function BuyCoinsModal({ isOpen, onClose, refetchTransactions }: BuyCoinsModalProps) {
  const { addToast } = useToastStore()

  const { data: configuration } = useQuery({
    queryKey: ['configuration'],
    queryFn: getConfiguration,
    staleTime: 1000 * 60,
  })

  const buyCoinsMutation = useMutation({
    mutationFn: buyCoins,
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
  } = useForm({ defaultValues: { usd: 0, coins: 0 } })

  const usdValue = watch('usd', 0)

  useEffect(() => {
    if (!configuration) return

    const coins = usdValue / configuration.MONEY_PER_COIN
    setValue('coins', coins)
  }, [usdValue, setValue, configuration])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await buyCoinsMutation.mutateAsync(Number(data.coins))
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Comprar Monedas"
      footerButtons={
        <>
          <Button onClick={ onClose } variant="tertiary">
            Cancelar
          </Button>
          <Button onClick={ handleSubmit(onSubmit) }>
            Confirmar
          </Button>
        </>
      }
    >
      <form className="flex items-center gap-2 mt-4">
        <div className="w-full">
          <label htmlFor="usd" className="block text-sm font-medium text-gray-700 mb-1">
            Dinero (USD)
          </label>
          <input
            id="usd"
            type="number"
            placeholder="$"
            { ...register('usd', {
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
            Monedas
          </label>
          <input
            id="coins"
            type="number"
            disabled
            { ...register('coins') }
            className="relative w-full bg-white border rounded-md shadow-sm px-3 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm disabled:bg-gray-200 disabled:cursor-not-allowed"
          />
        </div>
      </form>
      { errors.usd && <p className="mt-1 text-sm text-red-600">{ errors.usd.message }</p> }
    </Modal>
  )
}
