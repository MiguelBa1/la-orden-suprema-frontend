import { Modal, Button } from '@components/UI'
import { useMutation, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { MissionDetails, payMission } from '@pages/admin'
import { useToastStore } from '@stores/useToastStore.ts'

type PayMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function PayMissionConfirmModal({ isOpen, onClose, mission, refetchMissionDetails }: PayMissionProps) {
  const { addToast } = useToastStore()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: payMission,
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
