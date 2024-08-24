import { Modal, Button } from '@components/index'
import { AssassinTableRow } from '@pages/assassin'
import { useToastStore } from '@stores/index'

type BuyAssassinsDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  assassin: AssassinTableRow | null;
}

export function BuyAssassinsDetailsModal({ isOpen, onClose, assassin }: BuyAssassinsDetailsModalProps) {
  const { addToast } = useToastStore()

  const handleBuyAssassin = () => {
    // TODO: Implement buy assassin logic

    addToast({
      message: '¡Compra exitosa!',
      type: 'success',
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
          <Button onClick={ onClose } variant="secondary">Cancelar</Button>
          <Button
            variant="primary"
            color="green"
            onClick={ handleBuyAssassin }
          >
            Comprar
          </Button>
        </>
      }
    >
      <p>
        ¿Desea comprar la información de { assassin?.name }?
      </p>
      <p>
        Esto le permitirá ver: Nombre completo, dirección y foto.
        Esta acción tiene un costo de <span className="font-bold">
          { assassin?.price }
        </span> monedas de asesino.
      </p>
    </Modal>
  )
}
