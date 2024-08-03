import { useState } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { countriesList } from '@data/index'
import { InputField, Dropdown, Button, UpdatePhoto } from '@components/index'
import { ProfileDetails } from '@pages/assassin'

type EditProfileFormProps = {
  profileDetailsQuery: UseQueryResult<ProfileDetails>
}

export function EditProfileForm({ profileDetailsQuery }: EditProfileFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors } } = useForm({
    defaultValues: profileDetailsQuery.data
  })

  const [photoUrl, setPhotoUrl] = useState(profileDetailsQuery.data?.photoUrl || '')

  if (!profileDetailsQuery.data) {
    return null
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
      <UpdatePhoto
        photoUrl={ photoUrl }
        onPhotoUpdated={ (newPhotoUrl) => setPhotoUrl(newPhotoUrl) }
        isDisabled={ false }
      />
      <form className="lg:col-span-2 space-y-4" onSubmit={ handleSubmit(() => console.log("Actualiza información del perfil")) }>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            id="name"
            label="Nombre"
            name="name"
            type="text"
            registration={ register('name', {
              required: 'El campo nombre es requerido'
            }) }
            error={ errors.name?.message }
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
            error={ errors.alias?.message }
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
                options={ countriesList }
                onChange={ field.onChange }
                value={ field.value }
                error={ errors.country?.message }
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
            error={ errors.address?.message }
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
            error={ errors.email?.message }
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </div>
  )
}
