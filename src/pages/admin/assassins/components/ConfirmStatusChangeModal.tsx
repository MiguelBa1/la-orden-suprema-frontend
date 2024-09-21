import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { updateAssassinStatus } from '@pages/admin/assassins/services'
import { useToastStore } from '@stores/index'

type ConfirmStatusChangeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  assassin: {
    _id: string;
    status: 'active' | 'inactive';
  };
  refetchAssassinDetails: UseQueryResult['refetch'];
}

export function ConfirmStatusChangeModal({ isOpen, onClose, assassin, refetchAssassinDetails }: ConfirmStatusChangeModalProps) {
  const { addToast } = useToastStore()

  const mutation = useMutation({
    mutationFn: updateAssassinStatus,
    onSuccess: async (data) => {
      onClose()

      await refetchAssassinDetails()
      addToast({
        type: 'success',
        message: data.message
      })
    },
    onError: (error) => {
      onClose()

      addToast({
        type: 'error',
        message: error.message
      })
    }
  })

  const handleConfirm = async () => {
    const newStatus = assassin.status === 'active' ? 'inactive' : 'active'
    await mutation.mutateAsync({ id: assassin._id, status: newStatus })

  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Confirmar cambio de estado"
      footerButtons={
        <>
          <Button onClick={ onClose } variant="tertiary">
            Cancelar
          </Button>
          <Button
            disabled={ mutation.isPending }
            onClick={ handleConfirm }
          >
            { mutation.isPending ? 'Cargando...' : 'Confirmar' }
          </Button>
        </>
      }
    >
      <p>
        { assassin.status === 'inactive' ?
          "¿Estás seguro de que quieres activar al asesino?" :
          "¿Estás seguro de que quieres desactivar al asesino?" }
      </p>
    </Modal>
  )
}
