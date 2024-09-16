import { Modal, Button } from '@components/UI'
import { AssassinItem, purchaseAssassinInformation } from '@pages/assassin'
import { useToastStore } from '@stores/index'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getConfiguration } from '@services/getConfiguration.service'

type BuyAssassinsDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  assassin: AssassinItem | null;
}

export function BuyAssassinDetailsModal({ isOpen, onClose, assassin }: BuyAssassinsDetailsModalProps) {
  const queryClient = useQueryClient()
  const { addToast } = useToastStore()

  const { data: configuration } = useQuery({
    queryKey: ['configuration'],
    queryFn: getConfiguration,
    staleTime: 1000 * 60,
  })

  const mutation = useMutation({
    mutationFn: purchaseAssassinInformation,
    onSuccess: async (data) => {
      addToast({ type: 'success', message: data.message })
      await queryClient.invalidateQueries({ queryKey: ['assassins'] })
    },
    onError: (error) => {
      addToast({ type: 'error', message: error.message })
    }
  })

  const handleBuyAssassin = () => {
    mutation.mutate(assassin?._id)
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
        Esta acción tiene un costo de <span className="font-bold">{ configuration?.INFORMATION_PRICE }</span> monedas de asesino.
      </p>
    </Modal>
  )
}
