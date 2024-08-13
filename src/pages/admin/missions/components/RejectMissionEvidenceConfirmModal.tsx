import { Modal, Button } from '@components/UI'
import { UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, useUpdateMissionStatusMutation } from '@pages/admin'
import { MissionStatus } from '@models/enums'

type PublishMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function RejectMissionEvidenceConfirmModal({
  isOpen,
  onClose,
  mission,
  refetchMissionDetails,
}: PublishMissionProps) {

  const { mutateAsync } = useUpdateMissionStatusMutation()

  const handleConfirm = async () => {
    await mutateAsync({ id: mission.id, status: MissionStatus.ASSIGNED })
    await refetchMissionDetails()

    onClose()
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Confirmación"
      footerButtons={
        <>
          <Button onClick={ onClose } variant="tertiary">
            Cancelar
          </Button>
          <Button onClick={ handleConfirm }>
            Rechazar evidencia
          </Button>
        </>
      }
    >
      <p>¿Desea rechazar la evidencia de esta misión? Se enviará de nuevo la misión al asesino para que adjunte la nueva evidencia de que se completó la misión</p>
    </Modal>
  )
}
