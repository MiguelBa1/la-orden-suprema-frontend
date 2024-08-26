import { Modal, Button } from '@components/UI'

type CreateAssassinConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

export function CreateAssassinConfirmModal({ isOpen, onClose, handleSubmit }: CreateAssassinConfirmModalProps) {
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
          <Button onClick={ handleSubmit }>
            Registrar
          </Button>
        </>
      }
    >
      <p>
        ¿Desea registrar este asesino? Se le enviará un correo electrónico con una contraseña aleatoria para comenzar a usar su cuenta
      </p>
    </Modal>
  )
}
