import { Modal, Button } from '@components/UI'
import { useMutation, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, publishMission } from '@pages/admin'
import { useToastStore } from '@stores/useToastStore.ts'

type PublishMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function PublishMissionConfirmModal({ isOpen, onClose, mission, refetchMissionDetails }: PublishMissionProps) {
  const { addToast } = useToastStore()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: publishMission,
    onSuccess: async (data) => {
      addToast({ message: data.message, type: 'success' })
      await queryClient.invalidateQueries({ queryKey: ['missions'] })
      await refetchMissionDetails()
    },
    onError: (error) => {
      addToast({ message: error.message, type: 'error' })
    }
  })

  const handleConfirm = () => {
    mutation.mutate({ id: mission._id })
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
