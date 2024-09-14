import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useLogin, useUser } from '@lib/index'
import { useToastStore } from '@stores/index'
import { ForgotPasswordFormFields} from '@pages/auth/models'
import { UserRole } from '@models/enums'

export function ForgotPassword() {
  const { addToast } = useToastStore()
  const { data: user } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormFields>()

  const { mutateAsync: _login, isPending } = useLogin({
    onSuccess: () => {
      addToast({ message: '¡Bienvenido!', type: 'success' })
    },
    onError: () => {
      addToast({ message: 'Credenciales inválidas', type: 'error' })
    }
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role === UserRole.ADMIN) {
      navigate('/app/admin/home')
    } else if (user?.role === UserRole.ASSASSIN) {
      navigate('/app/assassin/home')
    }
  }, [navigate, user])

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = (data) => {
    navigate('/verify-code', { state: { email: data.email } })
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Restablecer contraseña</h1>
          <p className="text-center">Ingrese un correo válido para reestablecer su contraseña.</p>
        </div>
        <form className="space-y-6" onSubmit={ handleSubmit(onSubmit) }>
          <div className="flex flex-col gap-1">
            <InputField
              id="email"
              type="text"
              name="email"
              placeholder="Correo electrónico"
              registration={ register('email', {
                required: 'Este campo es requerido',
                pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' }
              }) }
              error={ errors.email?.message as string }
            />
          </div>
          <div className="space-y-2 text-center">
            <Button type="submit" className="w-full">
              { isPending ? 'Enviando Código...' : 'Enviar Código' }
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
