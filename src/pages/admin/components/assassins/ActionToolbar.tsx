import { UseQueryResult } from '@tanstack/react-query'
import { UseFormReturn, Controller } from 'react-hook-form'
import { InputField, Dropdown, Button } from '@components/index'

type ActionToolbarProps = {
  searchForm: UseFormReturn;
  refetchAssassinsList: UseQueryResult['refetch'];
}

const statusOptions = [
  { value: 'active', label: 'Activo' },
  { value: 'inactive', label: 'Inactivo' },
]

export function ActionToolbar({ searchForm, refetchAssassinsList }: ActionToolbarProps) {

  return (
    <form
      onSubmit={ searchForm.handleSubmit( async () => {
        await refetchAssassinsList()
      }) }
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-14 gap-y-2 lg:w-3/4"
    >
      <InputField
        id="name"
        type="text"
        placeholder="Nombre"
        registration={ searchForm.register('name') }
      />
      <InputField
        id="alias"
        type="text"
        placeholder="Seudónimo"
        registration={ searchForm.register('alias') }
      />
      <Controller
        name="status"
        control={ searchForm.control }
        render={ ({ field }) => (
          <Dropdown
            id="status"
            placeholder="Estado"
            options={ statusOptions }
            onChange={ (value) => field.onChange(value) }
            value={ field.value }
          />
        ) }
      />
      <InputField
        id="email"
        type="email"
        placeholder="Email"
        registration={ searchForm.register('email') }
      />
      <InputField
        id="location"
        type="text"
        placeholder="Ubicación"
        registration={ searchForm.register('location') }
      />
      <Button
        type="submit"
      >
        Buscar
      </Button>
    </form>
  )
}
