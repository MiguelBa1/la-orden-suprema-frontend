import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, Controller, useForm } from 'react-hook-form'
import { InputField, Dropdown, Textarea, Button } from '@components/index'
import { useToastStore } from '@stores/index'
import { MissionPaymentType } from '@models/enums'
import { getDebtsList, CreateMissionConfirmationModal, createMission } from '@pages/assassin'

const missionTypes = [
  { label: 'Monedas de asesino', value: MissionPaymentType.COINS },
  { label: 'Deuda de sangre', value: MissionPaymentType.BLOOD_DEBT },
  { label: 'Cobro de deuda de sangre', value: MissionPaymentType.BLOOD_DEBT_COLLECTION },
]

export function CreateMissionForm() {
  const queryClient = useQueryClient()
  const { addToast } = useToastStore()
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement | null>(null)

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)

  const mutation = useMutation({
    mutationFn: createMission,
    onSuccess: async (data) => {
      addToast({ type: 'success', message: data.message })
      await queryClient.invalidateQueries({ queryKey: ['created-by-me-missions'] })
      navigate('/app/assassin/missions/created-by-me')
    },
    onError: (error) => {
      addToast({ type: 'error', message: error.message })
      setIsConfirmationModalOpen(false)
    }
  })

  const {
    register,
    control,
    watch,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>()

  const selectedPaymentType = watch('paymentType')
  const selectedCoins = watch('coins')

  const debtsQuery = useQuery({
    queryKey: ['debts'],
    queryFn: getDebtsList,
    enabled: selectedPaymentType === MissionPaymentType.BLOOD_DEBT_COLLECTION,
  })

  const selectedDebtor = debtsQuery.data?.find((item) => item.value === watch('debtor'))?.label

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const payload = {
      description: data.description,
      details: data.details,
      paymentType: data.paymentType,
      coinsAmount: data.coins ? Number(data.coins) : undefined,
      assignedTo: data.debtor ?? undefined,
    }

    mutation.mutate(payload)
  }

  return (
    <>
      <form
        ref={ formRef }
        className="grid grid-cols-2 gap-4"
        onSubmit={ handleSubmit(onSubmit) }
      >
        <InputField
          id="description"
          name="description"
          label="Descripción"
          type="text"
          required
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
          required
          registration={ register('details', {
            required: 'Este campo es requerido',
          }) }
          className="col-span-2"
          error={ errors.details?.message as string }
        />
        <div className="grid grid-cols-2 gap-4 col-span-2 lg:col-span-1">
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
                error={ errors.paymentType?.message as string }
                className="col-span-2 sm:col-span-1"
              />
            ) }
          />
          { selectedPaymentType === MissionPaymentType.COINS && (
            <InputField
              id="coins"
              name="coins"
              type="number"
              label="Cantidad"
              required
              min={ 1 }
              registration={ register('coins', {
                required: 'Este campo es requerido',
                min: {
                  value: 1,
                  message: 'La cantidad mínima es 1'
                }
              }) }
              error={ errors.coins?.message as string }
              className="col-span-2 sm:col-span-1"
            />
          ) }
          { selectedPaymentType === MissionPaymentType.BLOOD_DEBT_COLLECTION && (
            <Controller
              name="debtor"
              control={ control }
              rules={ { required: 'Este campo es requerido' } }
              render={ ({ field, fieldState: { error } }) => (
                <Dropdown
                  id="debtor"
                  options={ debtsQuery.data ?? [] }
                  value={ field.value }
                  onChange={ field.onChange }
                  label="Asignar a"
                  error={ error?.message }
                  placeholder={ debtsQuery.isLoading ? 'Cargando...' : 'Seleccionar' }
                />
              ) }
            />
          ) }
        </div>
        <div className="col-span-2 flex justify-center lg:justify-end">
          <Button
            color="green"
            type="button"
            onClick={ async () => {
              const isValid = await trigger()
              if (isValid) {
                setIsConfirmationModalOpen(true)
              }
            } }
          >
            Publicar misión
          </Button>
        </div>
      </form>
      <CreateMissionConfirmationModal
        isOpen={ isConfirmationModalOpen }
        onClose={ () => setIsConfirmationModalOpen(false) }
        missionPaymentType={ selectedPaymentType as MissionPaymentType }
        handleSubmit={ handleSubmit(onSubmit) }
        coins={ selectedCoins }
        debtorName={ selectedDebtor }
      />
    </>
  )
}
