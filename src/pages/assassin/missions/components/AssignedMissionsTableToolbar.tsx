import { UseQueryResult } from '@tanstack/react-query'
import { Controller, UseFormReturn } from 'react-hook-form'
import { Button, Dropdown } from '@components/index.ts'
import { MissionStatus } from '@models/enums'
import { missionStatusTranslations } from '@utils/translations'

type AssignedMissionsTableToolbarProps = {
  searchForm: UseFormReturn;
  refetchMissionList: UseQueryResult['refetch'];
}

const missionStatusOptions = [
  { value: MissionStatus.ASSIGNED, label: missionStatusTranslations[MissionStatus.ASSIGNED] },
  { value: MissionStatus.COMPLETED, label: missionStatusTranslations[MissionStatus.COMPLETED] },
  { value: MissionStatus.PAID, label: missionStatusTranslations[MissionStatus.PAID] },
]

export function AssignedMissionsTableToolbar({ searchForm, refetchMissionList }: AssignedMissionsTableToolbarProps) {
  return (
    <form
      onSubmit={ searchForm.handleSubmit( async () => {
        await refetchMissionList()
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
      <Button type="submit" variant="secondary">
        Buscar
      </Button>
    </form>
  )
}


