import { UseQueryResult } from '@tanstack/react-query'
import { UseFormReturn, Controller } from 'react-hook-form'
import { InputField, Dropdown, Button } from '@components/index.ts'

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
        name="name"
        placeholder="Nombre"
        registration={ searchForm.register('name') }
      />
      <InputField
        id="alias"
        type="text"
        name="alias"
        placeholder="Pseudónimo"
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
        name="email"
        placeholder="Email"
        registration={ searchForm.register('email') }
      />
      <InputField
        id="location"
        type="text"
        name="location"
        placeholder="Ubicación"
        registration={ searchForm.register('location') }
      />
      <Button
        type="submit"
        variant="secondary"
      >
        Buscar
      </Button>
    </form>
  )
}
