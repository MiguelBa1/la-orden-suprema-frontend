import { useNavigate } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useToastStore } from '@stores/index'
import { useRef } from 'react'

export function NewPassword() {
  const navigate = useNavigate()
  const { addToast } = useToastStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>()

  const passwordRef = useRef<string | null>(null)

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    addToast({ message: '¡Contraseña reestablecida con éxito!', type: 'success' })
    navigate('/auth/login')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Restablecer contraseña</h1>
          <p className="text-center">Ingrese su nueva contraseña.</p>
        </div>
        <form className="space-y-4" onSubmit={ handleSubmit(onSubmit) }>
          <InputField
            id="password"
            type="password"
            name="password"
            placeholder="Nueva contraseña"
            registration={ register('password', {
              required: 'Este campo es requerido',
              onChange: (e) => passwordRef.current = e.target.value
            }) }
            error={ errors.password?.message as string }
          />
          <InputField
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            registration={ register('confirmPassword', {
              required: 'Este campo es requerido',
              validate: (value) => value === passwordRef.current || 'Las contraseñas no coinciden'
            }) }
            error={ errors.confirmPassword?.message as string }
          />
          <Button type="submit" className="w-full">
            Restablecer contraseña
          </Button>
        </form>
      </div>
    </div>
  )
}
