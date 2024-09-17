import { UseQueryResult } from '@tanstack/react-query'
import { UseFormReturn, Controller } from 'react-hook-form'
import { InputField, Dropdown, Button } from '@components/index.ts'
import { MissionStatus } from '@models/enums'
import { missionStatusTranslations } from '@utils/translations'

type MissionsTableToolbarProps = {
  searchForm: UseFormReturn;
  refetchAssassinsList: UseQueryResult['refetch'];
}

const missionStatusOptions = [
  { value: MissionStatus.CREATED, label: missionStatusTranslations[MissionStatus.CREATED] },
  { value: MissionStatus.PUBLISHED, label: missionStatusTranslations[MissionStatus.PUBLISHED] },
  { value: MissionStatus.REJECTED, label: missionStatusTranslations[MissionStatus.REJECTED] },
  { value: MissionStatus.ASSIGNED, label: missionStatusTranslations[MissionStatus.ASSIGNED] },
  { value: MissionStatus.COMPLETED, label: missionStatusTranslations[MissionStatus.COMPLETED] },
  { value: MissionStatus.PAID, label: missionStatusTranslations[MissionStatus.PAID] },
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
        placeholder="Creador"
        name="createdBy"
        registration={ searchForm.register('createdBy') }
      />
      <Button variant="secondary" type="submit">
        Buscar
      </Button>
    </form>
  )
}


