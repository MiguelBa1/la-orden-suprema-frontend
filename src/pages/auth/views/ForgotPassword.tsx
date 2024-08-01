import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useLogin, useUser } from '@lib/index'
import { useToastStore } from '@stores/index'
import { LoginFormFields } from '@pages/auth/models'
import { UserRole } from '@models/enums'

export function ForgotPassword() {
  const { addToast } = useToastStore()
  const { data: user } = useUser()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormFields>()

  const { mutateAsync: login, isPending } = useLogin({
    onSuccess: () => {
      addToast({
        message: '¡Contraeña reestablecida con éxito!',
        type: 'success'
      })
    },
    onError: () => {
      addToast({
        message: 'Código de verificación inválido',
        type: 'error'
      })
    }
  })

  const navigate = useNavigate()

  // Redirect to the corresponding dashboard
  useEffect(() => {
    if (user?.roles.includes(UserRole.ADMIN)) {
      navigate('/app/admin/home')
    } else if (user?.roles.includes(UserRole.ASSASSIN)) {
      navigate('/app/assassin/home')
    }
  }, [navigate, user])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = {
      email: data.email,
      password: data.password
    }

    await login(payload)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>
          <p className="text-center">Ingrese un correo válido para reestablecer si contraseña.</p>
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
          <div className="flex flex-col gap-1">
            <InputField
              id="code"
              type="number"
              name="code"
              placeholder="Código de verificación"
              registration={ register('password', {
                required: 'Este campo es requerido'
              }) }
              error={ errors.password?.message as string }
            />
          </div>
          <div className="space-y-2 text-center">
            <Button
              type="submit"
              className="w-full"
            >
              { isPending ? 'Validando código...' : 'Validar código' }
            </Button>
          </div>
          <div className="space-y-2 text-center">
            <Button
              type="submit"
              className="w-full"
            >
              { isPending ? 'Reenviando código...' : 'Reenviar Correo' }
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

             
