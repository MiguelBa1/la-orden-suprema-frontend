import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useForm, Controller, FieldValues, SubmitHandler } from 'react-hook-form'
import { InputField, Dropdown, Button } from '@components/index'
import { AssassinPhoto, CreateAssassinConfirmModal, createAssassin } from '@pages/admin'
import { useToastStore } from '@stores/useToastStore.ts'
import { getCountries } from '@services/getCountries.service'

export function CreateAssassinForm() {
  const methods = useForm<FieldValues>()
  const { addToast } = useToastStore()
  const navigate = useNavigate()

  const createAssassinMutation = useMutation({
    mutationFn: createAssassin,
    onSuccess: () => {
      addToast({ type: 'success', message: 'Asesino registrado correctamente' })
      navigate('/app/admin/assassins')
    },
    onError: (error) => {
      console.log('error', error)
      addToast({ type: 'error', message: 'Error al registrar el asesino' })
    }
  })

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: () => getCountries(),
    select: (data) => {
      return data.map((country) => ({
        label: country,
        value: country
      }))
    }
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger
  } = methods

  const [profilePicture, setProfilePicture] = useState<string>()
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const payload = {
      name: data.name,
      alias: data.alias,
      country: data.country,
      address: data.address,
      email: data.email,
      profilePicture: data.profilePicture[0]
    }

    createAssassinMutation.mutate(payload)

    addToast({ type: 'success', message: 'Asesino registrado correctamente' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
      <AssassinPhoto
        profilePicture={ profilePicture }
        onPhotoUpdated={ (newPhotoUrl) => setProfilePicture(newPhotoUrl) }
        isDisabled={ false }
        methods={ methods }
        required
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
          <Button onClick={ async () => {
            const isValid = await trigger()
            if (!isValid) return

            setIsConfirmModalOpen(true)
          } }
          >
            Registrar asesino
          </Button>
        </div>
      </form>

      <CreateAssassinConfirmModal
        isOpen={ isConfirmModalOpen }
        onClose={ () => setIsConfirmModalOpen(false) }
        handleSubmit={ handleSubmit(onSubmit) }
      />
    </div>
  )
}
