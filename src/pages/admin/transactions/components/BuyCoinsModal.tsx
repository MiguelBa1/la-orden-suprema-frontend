import { Modal, Button } from '@components/UI'
import { InputField } from '@components/Forms'
import { useForm } from 'react-hook-form'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { useMutation } from '@tanstack/react-query'
import { useToastStore } from '@stores/useToastStore'

type BuyCoinsModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function BuyCoinsModal({ isOpen, onClose }: BuyCoinsModalProps) {

    const { addToast } = useToastStore()
    const { register, watch } = useForm({
        defaultValues: {
            usd: 0
        }
    });

    const onSubmit = async () => {
        addToast({ message: 'Monedas compradas con éxito', type: 'success' })
        onClose()
    }

    const usdValue = watch('usd');

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Comprar Monedas"
            footerButtons={
                <>
                    <Button onClick={onClose} variant="tertiary">
                        Cancelar
                    </Button>
                    <Button onClick={onSubmit}>
                        Confirmar
                    </Button>
                </>
            }
        >
            <form className='flex items-center gap-2'>
                <InputField
                    id="usd"
                    label="Dinero(USD)"
                    type="number"
                    placeholder="$"
                    registration={register('usd')}
                />
                <ArrowRightIcon className="w-12 h-12 mt-6" />
                <div className='w-full'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monedas</label>
                    <div>
                        { usdValue * 10 }
                    </div>
                </div>
            </form>
        </Modal>
    )
}
