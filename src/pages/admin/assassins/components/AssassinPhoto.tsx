import { ChangeEvent, useRef, useState } from 'react'
import { Button } from '@components/UI'
import { UseFormReturn } from 'react-hook-form'

type AssassinPhotoProps = {
  methods: UseFormReturn
  photoUrl?: string
  onPhotoUpdated: (newPhotoUrl: string) => void
  isDisabled: boolean
  required?: boolean
}

export function AssassinPhoto({ methods, photoUrl, onPhotoUpdated, isDisabled, required }: AssassinPhotoProps) {
  const { register, formState: { errors } } = methods
  const hiddenInputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string>(photoUrl ?? '/images/no-user-image.webp')

  const { ref: registerRef, ...rest } = register('photoUrl', {
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        const urlImage = URL.createObjectURL(file)
        setPreview(urlImage)
        onPhotoUpdated(urlImage)
      }
    },
    required: required ? 'La foto es requerida' : undefined
  })

  const handleButtonClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click()
    }
  }

  return (
    <div className="flex flex-col justify-end items-center gap-4 lg:gap-8">
      <img src={ preview } alt="Foto del usuario"
        className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full" />
      <input
        type="file"
        { ...rest }
        ref={ (e) => {
          registerRef(e)
          hiddenInputRef.current = e
        } }
        style={ { display: 'none' } }
        accept="image/*"
        disabled={ isDisabled }
      />
      <span className="text-sm text-red-500">
        { errors.photoUrl?.message as string }
      </span>

      <Button
        type="button"
        disabled={ isDisabled }
        variant="secondary"
        onClick={ handleButtonClick }
      >
        { preview ? 'Cambiar imagen' : 'Subir imagen' }
      </Button>
    </div>
  )
}