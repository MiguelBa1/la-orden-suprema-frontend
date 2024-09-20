import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, rejectMissionEvidence } from '@pages/assassin'
import { useToastStore } from '@stores/useToastStore.ts'

type RejectMissionEvidenceProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function RejectMissionEvidenceConfirmModal({ isOpen, onClose, mission, refetchMissionDetails, }: RejectMissionEvidenceProps) {
  const toast = useToastStore()

  const mutation = useMutation({
    mutationFn: rejectMissionEvidence,
    onSuccess: async (data) => {
      toast.addToast({
        message: data.message,
        type: 'success'
      })
      await refetchMissionDetails()
    },
    onError: (error) => {
      toast.addToast({
        message: error.message,
        type: 'error'
      })
    }
  })

  const handleConfirm = async () => {
    await mutation.mutateAsync({
      missionId: mission._id,
      assassinId: mission.assignedTo
    })
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
