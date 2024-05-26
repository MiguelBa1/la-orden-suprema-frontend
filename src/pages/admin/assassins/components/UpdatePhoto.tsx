import { ChangeEvent, useRef } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@components/UI'
import { uploadImage } from '@pages/admin'
import { useToastStore } from '@stores/index'

type UpdatePhotoProps = {
  photoUrl: string
  onPhotoUpdated: (newPhotoUrl: string) => void
  isDisabled: boolean
}

export function UpdatePhoto({ photoUrl, onPhotoUpdated, isDisabled }: UpdatePhotoProps) {
  const { addToast } = useToastStore()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const { mutate: uploadImageMutation, isPending: uploadImageMutationIsPending } = useMutation(
    {
      mutationFn: uploadImage,
      onSuccess: (data) => {
        console.log(data)
        onPhotoUpdated(data)
        addToast({ message: 'Foto actualizada', type: 'success' })
      },
      onError: (error) => {
        addToast({ message: error.message, type: 'error' })
      }
    }
  )

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      uploadImageMutation(event.target.files[0])
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className="flex flex-col justify-end items-center gap-4 lg:gap-8">
      <img src={ photoUrl } alt="Foto del usuario"
        className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full" />
      <input
        type="file"
        ref={ fileInputRef }
        style={ { display: 'none' } }
        onChange={ handleFileChange }
        accept="image/*"
        disabled={ isDisabled }
      />
      <Button
        type="button"
        disabled={ isDisabled || uploadImageMutationIsPending }
        variant="secondary"
        onClick={ handleButtonClick }
      >
        { uploadImageMutationIsPending ? 'Subiendo...' : 'Actualizar' }
      </Button>
    </div>
  )
}
