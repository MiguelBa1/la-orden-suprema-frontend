import { Modal, Button } from '@components/UI'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { updateAssassinStatus } from '@pages/admin/services/assassins'

type ConfirmStatusChangeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  assassin: {
    id: number;
    status: 'active' | 'inactive';
  };
  refetchAssassinDetails: UseQueryResult['refetch'];
}

export function ConfirmStatusChangeModal({
  isOpen,
  onClose,
  assassin,
  refetchAssassinDetails,
}: ConfirmStatusChangeModalProps) {

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: number, status: 'active' | 'inactive' }) => updateAssassinStatus(id, status),
    onSuccess: async () => {
      await refetchAssassinDetails()
    }
  })

  const handleConfirm = () => {
    const newStatus = assassin.status === 'active' ? 'inactive' : 'active'
    mutation.mutate({ id: assassin.id, status: newStatus })
    onClose()
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Confirmar cambio de estado"
      footerButtons={
        <>
          <Button onClick={ onClose } className="bg-gray-600 hover:bg-gray-700 focus-visible:ring-gray-500">
            Cancelar
          </Button>
          <Button onClick={ handleConfirm }>
            Confirmar
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
