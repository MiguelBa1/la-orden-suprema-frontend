import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, rejectMissionEvidence } from '@pages/assassin'
import { useToastStore } from '@stores/useToastStore.ts'

type PublishMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function RejectMissionEvidenceConfirmModal({ isOpen, onClose, mission, refetchMissionDetails, }: PublishMissionProps) {
  const toast = useToastStore()

  const mutation = useMutation({
    mutationFn: rejectMissionEvidence,
    onSuccess: async () => {
      toast.addToast({ message: 'La evidencia fue rechazada correctamente', type: 'success' })
      await refetchMissionDetails()
    },
    onError: () => {
      toast.addToast({ message: 'Ocurrió un error al rechazar la evidencia', type: 'error' })
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
