import { useState } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { AssassinDetails, ConfirmStatusChangeModal } from '@pages/admin'
import { countriesList } from '@data/countriesList'
import { InputField, Dropdown, Button, ToggleSwitch } from '@components/index.ts'

type EditAssassinFormProps = {
  assassinDetailsQuery: UseQueryResult<AssassinDetails>
}

export function EditAssassinForm({ assassinDetailsQuery }: EditAssassinFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors } } = useForm({
    defaultValues: assassinDetailsQuery.data
  })

  const isInactive = assassinDetailsQuery.data?.status === 'inactive'
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  if (!assassinDetailsQuery.data) {
    return null
  }

  return (
    <form className="grid grid-cols-1 lg:grid-cols-3 gap-4" onSubmit={ handleSubmit(() => console.log("Envía información")) }>
      <div className="flex flex-col justify-end items-center gap-4 lg:gap-8">
        <img src={ assassinDetailsQuery.data?.photoUrl } alt="Foto del usuario"
          className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full" />
        <Button
          type="button"
          disabled={ isInactive }
          variant="secondary"
          onClick={ () => console.log("Actualizar fotografía") }>Actualizar</Button>
      </div>
      <div className="lg:col-span-2 space-y-4">
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
            disabled={ isInactive }
          />
          <InputField
            id="alias"
            label="Seudónimo"
            name="alias"
            type="text"
            registration={ register('alias', {
              required: 'El campo seudónimo es requerido'
            }) }
            error={ errors.alias?.message }
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
                options={ countriesList }
                onChange={ field.onChange }
                value={ field.value }
                error={ errors.country?.message }
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
            error={ errors.address?.message }
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
            error={ errors.email?.message }
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
          <InputField
            id="coins"
            label="Monedas Asesino"
            name="coins"
            type="number"
            disabled
            registration={ register('coins', {
              required: 'El campo monedas es requerido'
            }) }
            error={ errors.coins?.message }
          />
          <InputField
            id="phone"
            label="Teléfono"
            name="phone"
            type="text"
            registration={ register('phone', {
              required: 'El campo teléfono es requerido'
            }) }
            error={ errors.phone?.message }
            disabled={ isInactive }
          />
        </div>
        { !isInactive &&
          <div className="flex justify-center lg:justify-end">
            <Button type="submit">Guardar</Button>
          </div>
        }
      </div>

      <ConfirmStatusChangeModal
        isOpen={ isConfirmModalOpen }
        onClose={ () => setIsConfirmModalOpen(false) }
        assassin={ assassinDetailsQuery.data }
        refetchAssassinDetails={ assassinDetailsQuery.refetch }
      />
    </form>
  )
}
