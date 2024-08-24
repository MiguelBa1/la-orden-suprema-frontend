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

export function PublishMissionConfirmModal({
  isOpen,
  onClose,
  mission,
  refetchMissionDetails,
}: PublishMissionProps) {

  const { mutateAsync } = useUpdateMissionStatusMutation()

  const handleConfirm = async () => {
    await mutateAsync({ id: mission.id, status: MissionStatus.PUBLISHED })
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
          <Button onClick={ handleConfirm } color="green" >
            Publicar
          </Button>
        </>
      }
    >
      <p>¿Desea publicar esta misión?</p>
    </Modal>
  )
}
