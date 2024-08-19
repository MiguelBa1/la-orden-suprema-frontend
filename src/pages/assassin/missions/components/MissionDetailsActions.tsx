import { UseQueryResult } from '@tanstack/react-query'
import { AssignMissionConfirmModal, CompleteMissionConfirmModal, MissionDetails, PayMissionConfirmModal, RejectMissionEvidenceConfirmModal } from '@pages/assassin'
import { Button } from '@components/UI'
import { useUser } from '@lib/react-query-auth.ts'
import { MissionStatus } from '@models/enums'
import { useState } from 'react'
import { downloadImageFromUrl } from '@utils/missionUtils.ts'

type MissionDetailsActionsProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

type MissionModalStates = {
  assign: boolean
  complete: boolean
  pay: boolean
  rejectEvidence: false
}

export function MissionDetailsActions({ missionDetailsQuery }: MissionDetailsActionsProps) {
  const userId = useUser()?.data?.id

  const [modalsStates, setModalsStates] = useState<MissionModalStates>({
    assign: false,
    complete: false,
    pay: false,
    rejectEvidence: false
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
          { missionDetailsData.assigned_to?.id === userId && missionDetailsData.status === MissionStatus.ASSIGNED && (
            <Button type="button" variant="primary" color="green" onClick={ () => toggleModal('complete') }>
              Completar
            </Button>
          ) }
          { missionDetailsData.created_by.id === userId && missionDetailsData.status === MissionStatus.COMPLETED && (
            <>
              <Button type="button" variant="primary" color="green" onClick={ () => toggleModal('pay') }>
                Pagar
              </Button>
              <Button type="button" variant="primary" color="red" onClick={ () => toggleModal('rejectEvidence') }>
                Rechazar evidencia
              </Button>
            </>
          ) }
        </div>

        <div>
          { missionDetailsData.image_url !== null && (
            <Button type="button" variant="secondary" onClick={ () => downloadImageFromUrl({
              url: missionDetailsData.image_url as string,
              fileName: 'evidence'
            }) }>
              Descargar Evidencia
            </Button>
          ) }
        </div>
      </div>
      <AssignMissionConfirmModal
        isOpen={ modalsStates.assign }
        onClose={ () => toggleModal('assign') }
        mission={ missionDetailsData }
        refetchMissionDetails={ missionDetailsQuery.refetch }
      />
      <CompleteMissionConfirmModal
        isOpen={ modalsStates.complete }
        onClose={ () => toggleModal('complete') }
        mission={ missionDetailsData }
        refetchMissionDetails={ missionDetailsQuery.refetch }
      />
      <PayMissionConfirmModal
        isOpen={ modalsStates.pay }
        onClose={ () => toggleModal('pay') }
        mission={ missionDetailsData }
        refetchMissionDetails={ missionDetailsQuery.refetch }
      />
      <RejectMissionEvidenceConfirmModal
        isOpen={ modalsStates.rejectEvidence }
        onClose={ () => toggleModal('rejectEvidence') }
        mission={ missionDetailsData }
        refetchMissionDetails={ missionDetailsQuery.refetch }
      />
    </div>
  )
}
