import { UseQueryResult } from '@tanstack/react-query'
import { UseFormReturn, Controller } from 'react-hook-form'
import { InputField, Dropdown, Button } from '@components/index.ts'
import { MissionStatus, missionStatusTranslations } from '@pages/admin'

type MissionsTableToolbarProps = {
  searchForm: UseFormReturn;
  refetchAssassinsList: UseQueryResult['refetch'];
}

const missionStatusOptions = [
  { value: 'active', label: missionStatusTranslations[MissionStatus.CREATED] },
  { value: 'inactive', label: missionStatusTranslations[MissionStatus.ASSIGNED] },
]

export function MissionsTableToolbar({ searchForm, refetchAssassinsList }: MissionsTableToolbarProps) {

  return (
    <form
      onSubmit={ searchForm.handleSubmit( async () => {
        await refetchAssassinsList()
      }) }
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-14 gap-y-2 lg:w-3/4"
    >
      <Controller
        name="status"
        control={ searchForm.control }
        render={ ({ field }) => (
          <Dropdown
            id="status"
            placeholder="Estado"
            options={ missionStatusOptions }
            onChange={ (value) => field.onChange(value) }
            value={ field.value }
          />
        ) }
      />
      <InputField
        id="created-by"
        type="text"
        placeholder="Creado por"
        registration={ searchForm.register('createdBy') }
      />
      <InputField
        id="assigned-to"
        type="text"
        placeholder="Asignado a"
        registration={ searchForm.register('createdBy') }
      />
      <Button type="submit">
        Buscar
      </Button>
    </form>
  )
}


