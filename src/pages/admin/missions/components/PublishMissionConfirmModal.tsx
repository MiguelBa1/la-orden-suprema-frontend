import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, publishMission } from '@pages/admin'
import { useToastStore } from '@stores/useToastStore.ts'

type PublishMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function PublishMissionConfirmModal({ isOpen, onClose, mission, refetchMissionDetails }: PublishMissionProps) {
  const toast = useToastStore()

  const mutation = useMutation({
    mutationFn: publishMission,
    onSuccess: async () => {
      toast.addToast({ message: 'La misión fue publicada correctamente', type: 'success' })
      await refetchMissionDetails()
    },
    onError: () => {
      toast.addToast({ message: 'Ocurrió un error al publicar la misión', type: 'error' })
    }
  })

  const handleConfirm = () => {
    mutation.mutate({ id: mission.id })
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
