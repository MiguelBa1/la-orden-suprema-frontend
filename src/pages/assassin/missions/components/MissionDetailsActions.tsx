import { UseQueryResult } from '@tanstack/react-query'
import { AssignMissionConfirmModal, MissionDetails, } from '@pages/assassin'
import { Button } from '@components/UI'
import { useUser } from '@lib/react-query-auth.ts'
import { useState } from 'react'

type MissionDetailsActionsProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

type MissionModalStates = {
  assign: boolean
}

export function MissionDetailsActions({ missionDetailsQuery }: MissionDetailsActionsProps) {
  const userId = useUser()?.data?.id

  const [modalsStates, setModalsStates] = useState<MissionModalStates>({
    assign: false,
  })

  if (!missionDetailsQuery.data) {
    return null
  }

  const { data: missionDetailsData } = missionDetailsQuery

  const toggleModal = (modal: keyof MissionModalStates) => {
    setModalsStates({ ...modalsStates, [modal]: !modalsStates[modal] })
  }

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between">
        <div className="flex flex-col mt-10 gap-4 md:flex-row md:mt-0">
          { missionDetailsData.created_by.id !== userId && missionDetailsData.assigned_to === null && (
            <Button type="button" variant="primary" color="green" onClick={ () => toggleModal('assign') }>
              Asignarme
            </Button>
          ) }
        </div>

        <div>
        </div>
      </div>
      <AssignMissionConfirmModal
        isOpen={ modalsStates.assign }
        onClose={ () => toggleModal('assign') }
        mission={ missionDetailsData }
        refetchMissionDetails={ missionDetailsQuery.refetch }
      />
    </div>
  )
}
