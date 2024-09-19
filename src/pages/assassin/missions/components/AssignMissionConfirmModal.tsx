import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { useToastStore } from '@stores/useToastStore.ts'
import { assignAssassinToMission, MissionDetails } from '@pages/assassin'
import { useUser } from '@lib/react-query-auth.ts'

type AssignMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function AssignMissionConfirmModal({ isOpen, onClose, mission, refetchMissionDetails }: AssignMissionProps) {
  const userId = useUser()?.data?._id
  const toast = useToastStore()

  const mutation = useMutation({
    mutationFn: assignAssassinToMission,
    onSuccess: async () => {
      toast.addToast({ message: 'Fuiste asignado a la misión correctamente', type: 'success' })
      await refetchMissionDetails()
    },
    onError: () => {
      toast.addToast({ message: 'Ocurrió un error al asignarte a la misión', type: 'error' })
    }
  })

  const handleConfirm = () => {
    mutation.mutate({ missionId: mission._id, assassinId: Number(userId) })
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
            Asignarme
          </Button>
        </>
      }
    >
      <p>¿Desea asignarse a esta misión? Una vez finalizada recibirá el pago mencionado</p>
    </Modal>
  )
}
