import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useForm, Controller, SubmitHandler, FieldValues } from 'react-hook-form'
import { AssassinPhoto, ConfirmStatusChangeModal, getAssassinDetails, updateAssassinDetails } from '@pages/admin'
import { InputField, Dropdown, Button, ToggleSwitch } from '@components/index'
import { useToastStore } from '@stores/index'
import { getCountries } from '@services/index'

type EditAssassinFormProps = {
  assassinId?: string
}

export function EditAssassinForm({ assassinId }: EditAssassinFormProps) {
  const { addToast } = useToastStore()

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    select: (data) => {
      return data.map((country) => ({
        label: country,
        value: country
      }))
    }
  })

  const assassinDetailsQuery = useQuery(
    {
      queryKey: ['assassin', assassinId],
      queryFn: () => getAssassinDetails(assassinId),
    }
  )

  const { mutateAsync: updateAssassinDetailsMutation } = useMutation({
    mutationFn: updateAssassinDetails,
    onSuccess: async (data) => {
      addToast({ type: 'success', message: data.message })
    },
    onError: (error) => {
      addToast({ type: 'error', message: error.message })
    }
  })

  const methods = useForm<FieldValues>({
    values: assassinDetailsQuery.data
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = methods

  const isInactive = assassinDetailsQuery.data?.status === 'inactive'

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  if (!assassinId) {
    return null
  }

  if (assassinDetailsQuery.isError) {
    return <div className="h-full flex justify-center items-center">
      <p>Error al cargar la información del asesino</p>
    </div>
  }

  if (!assassinDetailsQuery.data) {
    return null
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = {
      name: data.name,
      alias: data.alias,
      country: data.country,
      address: data.address,
      status: data.status,
      profilePicture: data.profilePicture[0]
    }

    await updateAssassinDetailsMutation({ id: assassinId, data: payload })

  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <AssassinPhoto
        profilePicture={ assassinDetailsQuery.data.profilePicture }
        isDisabled={ isInactive }
        methods={ methods }
      />
      <form className="lg:col-span-2 space-y-4" onSubmit={ handleSubmit(onSubmit) }>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            id="name"
            label="Nombre"
            name="name"
            type="text"
            registration={ register('name', {
              required: 'El campo nombre es requerido'
            }) }
            error={ errors.name?.message as string }
            disabled={ isInactive }
          />
          <InputField
            id="alias"
            label="Pseudónimo"
            name="alias"
            type="text"
            registration={ register('alias', {
              required: 'El campo pseudónimo es requerido'
            }) }
            error={ errors.alias?.message as string }
            disabled={ isInactive }
          />
          <Controller
            name="country"
            control={ control }
            rules={ { required: 'El campo país es requerido' } }
            render={ ({ field }) => (
              <Dropdown
                id="country"
                label="País"
                options={ countries }
                onChange={ field.onChange }
                value={ field.value }
                error={ errors.country?.message as string }
                disabled={ isInactive }
              />
            ) }
          />
          <InputField
            id="address"
            label="Dirección"
            name="address"
            type="text"
            registration={ register('address', {
              required: 'El campo dirección es requerido'
            }) }
            error={ errors.address?.message as string }
            disabled={ isInactive }
          />
          <InputField
            id="email"
            label="Email"
            name="email"
            type="email"
            disabled
            registration={ register('email', {
              required: 'El campo email es requerido',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'El email no es válido'
              }
            }) }
            error={ errors.email?.message as string }
          />
          <InputField
            id="coins"
            label="Monedas Asesino"
            name="coins"
            type="number"
            disabled
            registration={ register('coins', {
              required: 'El campo monedas es requerido'
            }) }
            error={ errors.coins?.message as string }
          />
          <Controller
            name="status"
            control={ control }
            render={ ({ field }) => (
              <ToggleSwitch
                checked={ field.value === 'active' }
                onChange={ () => {
                  setIsConfirmModalOpen(true)
                } }
                label="Estado"
              />
            ) }
          />
        </div>
        { !isInactive &&
          <div className="flex justify-center lg:justify-end">
            <Button type="submit">Guardar</Button>
          </div>
        }
      </form>

      <ConfirmStatusChangeModal
        isOpen={ isConfirmModalOpen }
        onClose={ () => setIsConfirmModalOpen(false) }
        assassin={ assassinDetailsQuery.data }
        refetchAssassinDetails={ assassinDetailsQuery.refetch }
      />
    </div>
  )
}
