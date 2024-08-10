import { UseQueryResult } from '@tanstack/react-query'
import {
  MissionDetails,
  PayMissionConfirmModal,
  PublishMissionConfirmModal,
  RejectMissionConfirmModal,
  RejectMissionEvidenceConfirmModal,
} from '@pages/admin'
import { Button } from '@components/UI'
import { useState } from 'react'
import { MissionStatus } from '@models/enums'

type MissionDetailsActionsProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

type MissionModalsStates = {
  publish: boolean
  reject: boolean
  pay: boolean
  rejectEvidence: boolean
}

export function MissionDetailsActions({ missionDetailsQuery }: MissionDetailsActionsProps) {
  const [modalsStates, setModalsStates] = useState<MissionModalsStates>({
    publish: false,
    reject: false,
    pay: false,
    rejectEvidence: false
  })

  if (!missionDetailsQuery.data) {
    return null
  }

  const { data: missionDetailsData } = missionDetailsQuery

  const hasEvidence = missionDetailsData.imageUrl !== null
  const canBePublished = missionDetailsData.status === MissionStatus.CREATED
  const canBePaid = missionDetailsData.status === MissionStatus.COMPLETED

  const downloadEvidence = () => {
    const link = document.createElement('a')
    link.href = missionDetailsData.imageUrl as string
    link.download = 'evidence'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleModal = (modal: keyof MissionModalsStates) => {
    setModalsStates({ ...modalsStates, [modal]: !modalsStates[modal] })
  }

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between">
        <div className="flex flex-col mt-10 gap-4 md:flex-row md:mt-0">
          { canBePublished && (
            <>
              <Button type="button" variant="primary" color="green" onClick={ () => toggleModal('publish') }>
                Publicar
              </Button>
              <Button type="button" variant="primary" color="red" onClick={ () => toggleModal('reject') }>
                Rechazar
              </Button>
            </>
          ) }
          { canBePaid && (
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

        { hasEvidence && (
          <Button type="button" variant="secondary" onClick={ downloadEvidence }>
            Descargar Evidencia
          </Button>
        ) }
      </div>
      <PublishMissionConfirmModal
        isOpen={ modalsStates.publish }
        onClose={ () => toggleModal('publish') }
        mission={ missionDetailsData }
        refetchMissionDetails={ missionDetailsQuery.refetch }
      />
      <RejectMissionConfirmModal
        isOpen={ modalsStates.reject }
        onClose={ () => toggleModal('reject') }
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
