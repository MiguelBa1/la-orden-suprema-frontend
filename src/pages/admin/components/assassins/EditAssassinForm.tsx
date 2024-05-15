import { UseQueryResult } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { AssassinDetails, countriesList, statusesList } from '@pages/admin'
import { InputField, Dropdown, Button } from '@components/index'

type EditAssassinFormProps = {
  assassinDetailsQuery: UseQueryResult<AssassinDetails>
}

export function EditAssassinForm({ assassinDetailsQuery }: EditAssassinFormProps) {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: assassinDetailsQuery.data
  })

  return (
    <form className="grid grid-cols-1 lg:grid-cols-3 gap-4" onSubmit={ handleSubmit(() => console.log("Envía información")) }>
      <div className="flex flex-col justify-end items-center gap-4 lg:gap-8">
        <img src={ assassinDetailsQuery.data?.photoUrl } alt="Foto del usuario"
          className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full" />
        <Button type="button" onClick={ () => console.log("Actualizar fotografía") }>Actualizar</Button>
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
          <Controller
            name="status"
            control={ control }
            rules={ { required: 'El campo estado es requerido' } }
            render={ ({ field }) => (
              <Dropdown
                id="status"
                label="Estado"
                options={ statusesList }
                onChange={ field.onChange }
                value={ field.value }
                error={ errors.status?.message }
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
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button type="submit">Guardar</Button>
        </div>
      </div>
    </form>
  )
}
