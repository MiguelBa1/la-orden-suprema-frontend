import { Modal, Button } from '@components/UI'
import { useMutation, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, rejectMissionEvidence } from '@pages/admin'
import { useToastStore } from '@stores/useToastStore.ts'

type RejectMissionEvidenceProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function RejectMissionEvidenceConfirmModal({ isOpen, onClose, mission, refetchMissionDetails }: RejectMissionEvidenceProps) {
  const { addToast } = useToastStore()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: rejectMissionEvidence,
    onSuccess: async (data) => {
      addToast({ message: data.message, type: 'success' })
      await queryClient.invalidateQueries({ queryKey: ['missions']})
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
          <Button onClick={ handleConfirm } color="red">
            Rechazar evidencia
          </Button>
        </>
      }
    >
      <p>¿Desea rechazar la evidencia de esta misión? Se enviará de nuevo la misión al asesino para que adjunte la nueva evidencia de que se completó la misión</p>
    </Modal>
  )
}
