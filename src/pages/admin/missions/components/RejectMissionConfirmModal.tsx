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

export function RejectMissionConfirmModal({
  isOpen,
  onClose,
  mission,
  refetchMissionDetails,
}: PublishMissionProps) {

  const { mutateAsync } = useUpdateMissionStatusMutation()

  const handleConfirm = async () => {
    await mutateAsync({ id: mission.id, status: MissionStatus.REJECTED })
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
            Rechazar
          </Button>
        </>
      }
    >
      <p>¿Desea rechazar esta misión?</p>
    </Modal>
  )
}
