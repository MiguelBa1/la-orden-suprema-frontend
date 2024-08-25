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
    onSuccess: async () => {
      toast.addToast({ message: 'La misión fue pagada correctamente', type: 'success' })
      await refetchMissionDetails()
    },
    onError: () => {
      toast.addToast({ message: 'Ocurrió un error al pagar la misión', type: 'error' })
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
