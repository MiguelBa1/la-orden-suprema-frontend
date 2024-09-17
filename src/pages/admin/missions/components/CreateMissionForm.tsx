import { useState } from 'react'
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { InputField, Textarea, Button, Dropdown } from '@components/index'
import { useToastStore } from '@stores/useToastStore'
import { createMission, CreateMissionConfirmModal } from '@pages/admin'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MissionPaymentType } from '@models/enums'

const missionTypes = [
  { label: 'Monedas de asesino', value: MissionPaymentType.COINS },
  { label: 'Deuda de sangre', value: MissionPaymentType.BLOOD_DEBT },
  { label: 'Cobro de deuda de sangre', value: MissionPaymentType.BLOOD_DEBT_COLLECTION },
]

export function CreateMissionForm() {
  const queryClient = useQueryClient()
  const { addToast } = useToastStore()
  const navigate = useNavigate()
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const mutation = useMutation({
    mutationFn: createMission,
    onSuccess: async (data) => {
      addToast({ type: 'success', message: data.message })
      await queryClient.invalidateQueries({ queryKey: ['missions'] })
      navigate('/app/admin/missions')
    },
    onError: (error) => {
      addToast({ type: 'error', message: error.message })
      setShowConfirmModal(false)
    }
  })

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FieldValues>({ values: { paymentType: MissionPaymentType.COINS } })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const payload = {
      description: data.description,
      details: data.details,
      paymentType: data.paymentType,
      coinsAmount: Number(data.quantity)
    }

    mutation.mutate(payload)
  }
  
  const selectedQuantity = watch('quantity')

  return (
    <>
      <form className="grid grid-cols-2 gap-4" onSubmit={ handleSubmit(onSubmit) }>
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
        <Controller
          name="paymentType"
          control={ control }
          rules={ { required: 'Este campo es requerido' } }
          render={ ({ field }) => (
            <Dropdown
              id="paymentType"
              label="Tipo de pago"
              options={ missionTypes }
              value={ field.value }
              onChange={ field.onChange }
              error={ errors.payment_type?.message as string }
              className="col-span-2 sm:col-span-1"
              disabled
            />
          ) }
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
          <Button
            color="green"
            type="button"
            onClick={ async () => {
              const isValid = await trigger()
              if (!isValid) return

              setShowConfirmModal(true)
            } }
          >
            Publicar misión
          </Button>
        </div>
      </form>
      <CreateMissionConfirmModal
        isOpen={ showConfirmModal }
        onClose={ () => setShowConfirmModal(false) }
        handleSubmit={ handleSubmit(onSubmit) }
        quantity={ selectedQuantity }
      />
    </>
  )
}
