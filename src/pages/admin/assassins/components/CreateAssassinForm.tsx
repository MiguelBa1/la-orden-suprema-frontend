import { useForm, Controller, FieldValues, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { countriesList } from '@data/index'
import { InputField, Dropdown, Button } from '@components/index'
import { AssassinPhoto, CreateAssassinConfirmModal } from '@pages/admin'
import { useState, useRef } from 'react'
import { useToastStore } from '@stores/useToastStore.ts'
import { useNavigate } from 'react-router-dom'

export function CreateAssassinForm() {
  const methods = useForm<FieldValues>()
  const formRef = useRef<HTMLFormElement | null>(null)
  const { addToast } = useToastStore()
  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = methods

  const [photoUrl, setPhotoUrl] = useState<string>()
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const onSubmit: SubmitHandler<FieldValues> = () => {
    // TODO: Implement API call to create a new assassin
    navigate('/app/admin/assassins')
    addToast({ type: 'success', message: 'Asesino registrado correctamente' })
  }

  const onInvalid: SubmitErrorHandler<FieldValues> = () => {
    addToast({ type: 'error', message: 'Por favor, completa todos los campos' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
      <AssassinPhoto
        photoUrl={ photoUrl }
        onPhotoUpdated={ (newPhotoUrl) => setPhotoUrl(newPhotoUrl) }
        isDisabled={ false }
        methods={ methods }
        required
      />
      <form className="lg:col-span-2 space-y-4" ref={ formRef } onSubmit={ handleSubmit(onSubmit, onInvalid) }>
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
                options={ countriesList }
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
          <Button onClick={ () => setIsConfirmModalOpen(true) }>Registrar asesino</Button>
        </div>
      </form>

      <CreateAssassinConfirmModal
        isOpen={ isConfirmModalOpen }
        onClose={ () => setIsConfirmModalOpen(false) }
        onConfirm={ () => {
          setIsConfirmModalOpen(false)
          formRef.current?.requestSubmit()
        } }
      />
    </div>
  )
}
