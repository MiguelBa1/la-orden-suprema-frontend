import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useUser } from '@lib/index'
import { useToastStore } from '@stores/index'
import { ForgotPasswordFormFields, sendEmail  } from '@pages/auth'
import { UserRole } from '@models/enums'

export function ForgotPassword() {
  const { addToast } = useToastStore()
  const { data: user } = useUser({
    enabled: localStorage.getItem('token') !== null
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormFields>()

  const { mutateAsync: sendEmailMutation, isPending } = useMutation( {
    mutationFn: sendEmail,
    onSuccess: (data) => {
      addToast({ message: data.message, type: 'success' })
    },
    onError: (error) => {
      addToast({ message: error.message, type: 'error' })
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

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = async (data) => {
    await  sendEmailMutation(data.email)
    navigate('/verify-code', { state: { email: data.email } })
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Restablecer contraseña</h1>
          <p className="text-center">Ingrese un correo válido para restablecer su contraseña.</p>
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
