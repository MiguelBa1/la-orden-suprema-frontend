import { Modal, Button } from '@components/UI'
import { useForm } from 'react-hook-form'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { useToastStore } from '@stores/useToastStore'
import { useEffect } from 'react'

type BuyCoinsModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function BuyCoinsModal({ isOpen, onClose }: BuyCoinsModalProps) {

  const { addToast } = useToastStore()
  const {
    register,
    handleSubmit,
    watch,
    setValue ,
    formState: { errors }
  } = useForm({
    defaultValues: {
      usd: 0,
      coins: 0
    }
  })

  const usdValue = watch('usd', 0) // Observar el valor del input USD

  useEffect(() => {
    const coins = usdValue / 10
    setValue('coins', coins) // Actualizar el valor del input deshabilitado
  }, [usdValue, setValue])

  const onSubmit = async () => {
    addToast({ message: 'Monedas compradas con éxito', type: 'success' })
    onClose()
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
                        Comprar
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
              min: { value: 0, message: 'El valor mínimo es 0' }
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
