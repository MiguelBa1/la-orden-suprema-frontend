import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useLogin, useUser } from '@lib/react-query-auth'
import { useToastStore } from '@stores/index.ts'

export default function Login() {
  const { addToast } = useToastStore()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data: user } = useUser()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { mutateAsync: login } = useLogin()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/home')
  }, [navigate, user])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true)

      const payload = {
        email: data.email,
        password: data.password
      }
      await login(payload)

      navigate('/home')

      addToast({
        message: '¡Bienvenido!',
        type: 'success'
      })
    } catch (error) {
      addToast({
        message: 'Credenciales inválidas',
        type: 'error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <form className="space-y-6" onSubmit={ handleSubmit(onSubmit) }>
          <div className="flex flex-col gap-1">
            <InputField
              id="email"
              type="email"
              placeholder="Correo electrónico"
              registration={ register('email', {
                required: 'Este campo es requerido',
                pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' }
              }) }
            />
            { errors.email && <span className="text-red-500">Este campo es requerido</span> }
          </div>
          <div className="flex flex-col gap-1">
            <InputField
              id="password"
              type="password"
              placeholder="Contraseña"
              registration={ register('password', {
                required: 'Este campo es requerido'
              }) }
            />
            { errors.password && <span className="text-red-500">Este campo es requerido</span> }
          </div>
          <div className="space-y-2 text-center">
            <Button
              type="submit"
              className="w-full"
            >
              { isLoading ? 'Iniciando sesión...' : 'Iniciar sesión' }
            </Button>
            <div>
              <a href="#" className="text-blue-500">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
