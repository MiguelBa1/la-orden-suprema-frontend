import { Modal, Button } from '@components/UI'
import { MissionPaymentType } from '@models/enums'

type CreateMissionConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  missionPaymentType: MissionPaymentType;
  handleSubmit: () => void;
  coins?: number;
  debtorName?: string;
};

export function CreateMissionConfirmationModal({ isOpen, onClose, missionPaymentType, handleSubmit, coins, debtorName }: CreateMissionConfirmationModalProps) {

  const messagesByPaymentType = {
    [MissionPaymentType.COINS]: `¿Deseas crear esta misión? Esto le costará ${coins} monedas de asesinos. Esta misión será revisada por un administrador de la Orden Suprema.`,
    [MissionPaymentType.BLOOD_DEBT]: '¿Deseas publicar esta misión? Tendrás una deuda pendiente con el asesino que la complete, quien podrá asignarte una misión en cualquier momento. Esta misión será revisada por un administrador de la Orden Suprema.',
    [MissionPaymentType.BLOOD_DEBT_COLLECTION]: `¿Deseas publicar esta misión? Con esto, habrás cobrado tu deuda pendiente con ${debtorName}. Esta misión será revisada por un administrador de la Orden Suprema.`
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Confirmar misión"
      footerButtons={ (
        <div className="flex justify-end gap-2">
          <Button onClick={ onClose } variant="tertiary">
            Cancelar
          </Button>
          <Button color="green" onClick={ () => {
            onClose()
            handleSubmit()
          } }>
            Crear
          </Button>
        </div>
      ) }
    >
      <p>
        { messagesByPaymentType[missionPaymentType] }
      </p>
    </Modal>
  )
}
