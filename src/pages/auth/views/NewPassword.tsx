import { useLocation } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useLogin } from '@lib/index'
import { useToastStore } from '@stores/index'
import { NewPasswordFormFields } from '../models'
import { useRef } from 'react'

export function NewPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm<NewPasswordFormFields>()
  const location = useLocation()
  const { addToast } = useToastStore()
  const email = location.state?.email  // Recuperar el email del estado

  const passwordRef = useRef<string | null>(null)
  
  const { mutateAsync: login, isPending } = useLogin({
    onSuccess: () => {
      addToast({
        message: '¡Contraseña reestablecida con éxito!',
        type: 'success'
      })
    },
    onError: () => {
      addToast({
        message: 'Error al restablecer la contraseña',
        type: 'error'
      })
    }
  })

  const onSubmit: SubmitHandler<NewPasswordFormFields> = async (data) => {
    console.log('Contraseña restablecida:', data.password)
    if (email) {
      const payload = {
        email: email,
        password: data.password
      }
      await login(payload)
    } else {
      console.error('Error: No se encontró el email para proceder con el restablecimiento de contraseña.')
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Restablecer contraseña</h1>
          <p className="text-center">Ingrese su nueva contraseña.</p>
        </div>
        <form className="space-y-6" onSubmit={ handleSubmit(onSubmit) }>
          <InputField
            id="password"
            type="password"
            name="password"
            placeholder="Nueva contraseña"
            registration={ register('password', {
              required: 'Este campo es requerido',
              onChange: (e) => passwordRef.current = e.target.value // Guardar la contraseña en el ref
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
            { isPending ? 'Restableciendo contraseña...' : 'Restablecer Contraseña' }
          </Button>
        </form>
      </div>
    </div>
  )
}
