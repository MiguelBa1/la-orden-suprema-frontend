import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import { InputField, Dropdown, Button } from '@components/index'
import { AssassinPhoto } from '@pages/admin'
import { ProfileDetails, updateProfile } from '@pages/assassin'
import { getCountries } from '@services/getCountries.service.ts'
import { useToastStore } from '@stores/useToastStore.ts'

type EditProfileFormProps = {
  profileDetailsQuery: UseQueryResult<ProfileDetails>
}

export function EditProfileForm({ profileDetailsQuery }: EditProfileFormProps) {
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

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: async (data) => {
      addToast({ type: 'success', message: data.message })
    },
    onError: (error) => {
      addToast({ type: 'error', message: error.message })
    }
  })

  const onSubmit = (data: FieldValues) => {
    const payload = {
      country: data.country,
      address: data.address,
      profilePicture: data.profilePicture[0]
    }

    mutation.mutate(payload)
  }

  const methods = useForm<FieldValues>({
    defaultValues: profileDetailsQuery.data
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = methods

  if (!profileDetailsQuery.data) {
    return null
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
      <AssassinPhoto
        profilePicture={ profileDetailsQuery.data.profilePicture }
        isDisabled={ false }
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
            disabled={ true }
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
            disabled={ true }
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
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </div>
  )
}
