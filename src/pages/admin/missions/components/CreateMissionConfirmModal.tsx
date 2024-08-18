import { Modal, Button } from '@components/UI'

type CreateMissionConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  quantity: number;
}

export function CreateMissionConfirmModal({ isOpen, onClose, onConfirm, quantity }: CreateMissionConfirmModalProps) {
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
          <Button
            onClick={ onConfirm }
            color="green"
          >
            Publicar
          </Button>
        </>
      }
    >
      <p>
        ¿Desea publicar esta misión? Esto le costará { quantity } monedas de asesino.
      </p>
    </Modal>
  )
}
