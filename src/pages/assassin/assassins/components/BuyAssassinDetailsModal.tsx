import { Modal, Button } from '@components/UI'
import { AssassinItem } from '@pages/assassin'
import { useToastStore } from '@stores/index'

type BuyAssassinsDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  assassin: AssassinItem | null;
}

export function BuyAssassinDetailsModal({ isOpen, onClose, assassin }: BuyAssassinsDetailsModalProps) {
  const { addToast } = useToastStore()

  const handleBuyAssassin = () => {
    addToast({ message: '¡Compra exitosa!', type: 'success', })
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
          <Button variant="primary" color="green" onClick={ handleBuyAssassin }>
            Comprar
          </Button>
        </>
      }
    >
      <p>
        ¿Desea comprar la información de este asesino?
      </p>
      <p>
        Esto le permitirá ver: Nombre completo, dirección y foto.
        Esta acción tiene un costo de <span className="font-bold">{ assassin?.price }</span> monedas de asesino.
      </p>
    </Modal>
  )
}
