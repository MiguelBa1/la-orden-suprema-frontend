import { useQuery } from '@tanstack/react-query'
import { useState, useRef } from 'react'
import { useUser } from '@lib/react-query-auth.ts'
import { useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, Controller, useForm } from 'react-hook-form'
import { InputField, Dropdown, Textarea, Button } from '@components/index'
import { useToastStore } from '@stores/index'
import { MissionPaymentType } from '@models/enums'
import { getDebtsList, CreateMissionConfirmationModal } from '@pages/assassin'

const missionTypes = [
  { label: 'Monedas de asesino', value: MissionPaymentType.COINS },
  { label: 'Deuda de sangre', value: MissionPaymentType.BLOOD_DEBT },
  { label: 'Cobro de deuda de sangre', value: MissionPaymentType.BLOOD_DEBT_COLLECTION },
]

export function CreateMissionForm() {
  const { addToast } = useToastStore()
  const { data: user } = useUser()
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement | null>(null)

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)

  const {
    register,
    control,
    watch,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>()

  const selectedPaymentType = watch('payment_type')
  const selectedCoins = watch('coins')

  const debtsQuery = useQuery({
    queryKey: ['debts'],
    queryFn: () => getDebtsList(user?.id as number),
    enabled: selectedPaymentType === MissionPaymentType.BLOOD_DEBT_COLLECTION,
  })

  const selectedDebtor = debtsQuery.data?.find((item) => item.value === watch('debtor'))?.label

  const onSubmit: SubmitHandler<FieldValues> = (_data) => {
    navigate(-1)
    addToast({
      type: 'success',
      message: 'Misión publicada correctamente'
    })
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
            name="payment_type"
            control={ control }
            rules={ { required: 'Este campo es requerido' } }
            render={ ({ field }) => (
              <Dropdown
                id="payment_type"
                label="Tipo de pago"
                options={ missionTypes }
                value={ field.value }
                onChange={ field.onChange }
                error={ errors.payment_type?.message as string }
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
