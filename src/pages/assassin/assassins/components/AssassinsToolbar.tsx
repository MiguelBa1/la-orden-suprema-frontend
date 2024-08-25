import { UseQueryResult } from '@tanstack/react-query'
import { UseFormReturn } from 'react-hook-form'
import { Button, InputField } from '@components/index.ts'

type AssassinsToolbarProps = {
  searchForm: UseFormReturn;
  refetchAssassinsList: UseQueryResult['refetch'];
}

export function AssassinsToolbar({ searchForm, refetchAssassinsList }: AssassinsToolbarProps) {
  return (
    <form
      onSubmit={ searchForm.handleSubmit( async () => {
        await refetchAssassinsList()
      }) }
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-14 gap-y-2 lg:w-3/4"
    >
      <InputField
        id="alias"
        type="text"
        name="alias"
        placeholder="Pseudónimo"
        registration={ searchForm.register('alias') }
      />
      <Button type="submit" variant="secondary">
        Buscar
      </Button>
    </form>
  )
}
