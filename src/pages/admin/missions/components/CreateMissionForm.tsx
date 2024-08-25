import { useState, useRef } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { InputField, Textarea, Button } from '@components/index'
import { useToastStore } from '@stores/useToastStore'
import { CreateMissionConfirmModal } from '@pages/admin'
import { useNavigate } from 'react-router-dom'

export function CreateMissionForm() {
  const { addToast } = useToastStore()
  const navigate = useNavigate()
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    values: {
      paymentType: 'Monedas de asesino',
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (_data) => {
    // TODO: Implement API call to create a new mission
    navigate('/app/admin/missions')
    addToast({ type: 'success', message: 'Misión publicada correctamente' })
  }
  
  const selectedQuantity = watch('quantity')

  return (
    <>
      <form ref={ formRef } className="grid grid-cols-2 gap-4" onSubmit={ handleSubmit(onSubmit) }>
        <InputField
          id="description"
          name="description"
          label="Descripción"
          type="text"
          registration={ register('description', {
            required: 'Este campo es requerido',
          }) }
          error={ errors.description?.message as string }
          className="col-span-2 md:col-span-1"
        />
        <Textarea
          id="details"
          name="details"
          label="Detalles"
          registration={ register('details', {
            required: 'Este campo es requerido',
          }) }
          className="col-span-2"
          error={ errors.details?.message as string }
        />
        <InputField
          id="paymentType"
          name="paymentType"
          label="Tipo de pago"
          type="text"
          disabled
          registration={ register('paymentType', {
            required: 'Este campo es requerido',
          }) }
          error={ errors.paymentType?.message as string }
          className="col-span-2 sm:col-span-1"
        />
        <InputField
          id="quantity"
          name="quantity"
          type="number"
          label="Cantidad"
          min={ 1 }
          registration={ register('quantity', {
            required: 'Este campo es requerido',
            min: { value: 1, message: 'La cantidad mínima es 1' }
          }) }
          error={ errors.quantity?.message as string }
          className="col-span-2 sm:col-span-1"
        />
        <div className="col-span-2 flex justify-center lg:justify-end">
          <Button color="green" type="button" onClick={ () => setShowConfirmModal(true) }>
            Publicar misión
          </Button>
        </div>
      </form>
      <CreateMissionConfirmModal
        isOpen={ showConfirmModal }
        onClose={ () => setShowConfirmModal(false) }
        onConfirm={ () => {
          setShowConfirmModal(false)
          formRef.current?.requestSubmit()
        } }
        quantity={ selectedQuantity }
      />
    </>
  )
}
