import { completeMission, MissionDetails } from '@pages/assassin'
import { useMutation, UseQueryResult } from '@tanstack/react-query'
import { Button, Modal } from '@components/UI'
import { FieldValues, useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useToastStore } from '@stores/useToastStore.ts'

type AssignMissionProps = {
  isOpen: boolean;
  onClose: () => void;
  mission: MissionDetails;
  refetchMissionDetails: UseQueryResult['refetch'];
}

export function CompleteMissionConfirmModal({ isOpen, onClose, mission, refetchMissionDetails }: AssignMissionProps) {
  const { register, handleSubmit } = useForm<FieldValues>()
  const { ref: registerRef } = register('image_url', { required:'La foto es requerida' })

  const hiddenInputRef = useRef<HTMLInputElement|null>(null)
  const formRef = useRef<HTMLFormElement|null>(null)

  const toast = useToastStore()

  const mutation = useMutation({
    mutationFn: completeMission,
    onSuccess: async () => {
      toast.addToast({ message: 'La evidencia fue subida exitosamente', type: 'success' })
      await refetchMissionDetails()
    },
    onError: () => {
      toast.addToast({ message: 'Ocurrió un error al subir la evidencia', type: 'error' })
    }
  })

  const onSubmit = () => {
    mutation.mutate({ id: mission.id, image_url: '/images/evidence.webp' })
    onClose()
  }

  const onInvalid = () => {
    toast.addToast({ message: "La imagen es requerida", type: "error" })
    onClose()
  }

  const handleButtonClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click()
    }
  }


  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      title="Completar misión"
      footerButtons={
        <>
          <Button onClick={ onClose } variant="tertiary">
            Cancelar
          </Button>
          <Button onClick={ () => formRef.current?.requestSubmit() } color="green">
            Completar
          </Button>
        </>
      }
    >
      <p>Por favor adjunte la evidencia que demuestre que se completó la misión satisfactoriamente</p>
      <form className="flex justify-center mt-4 mb-16" ref={ formRef } onSubmit={ handleSubmit(onSubmit, onInvalid) }>
        <Button type="button" variant="secondary" onClick={ handleButtonClick }>
          Subir evidencia
        </Button>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={ (e) => {
            registerRef(e)
            hiddenInputRef.current = e
          } }
        />
      </form>
    </Modal>
  )
}
