import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, payMission } from '@pages/assassin'
import { useToastStore } from '@stores/useToastStore.ts'

type PayMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function PayMissionConfirmModal({ isOpen, onClose, mission, refetchMissionDetails, }: PayMissionProps) {
  const toast = useToastStore()

  const mutation = useMutation({
    mutationFn: payMission,
    onSuccess: async (data) => {
      toast.addToast({
        message: data.message,
        type: 'success' })
      await refetchMissionDetails()
    },
    onError: (error) => {
      toast.addToast({
        message: error.message ?? 'Ocurrió un error al pagar la misión',
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
          <Button onClick={ handleConfirm } color="green">
            Pagar
          </Button>
        </>
      }
    >
      <p>¿Desea pagar esta misión? Se entregará el pago y se dará por finalizada la misión</p>
    </Modal>
  )
}
