import { useNavigate } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useForm, SubmitHandler } from 'react-hook-form'
import { VerifyCodeFormFields } from '@pages/auth/models'

export function VerifyCode() {
  const { register, handleSubmit, formState: { errors } } = useForm<VerifyCodeFormFields>();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<VerifyCodeFormFields> = (data) => {
    console.log('Correo:', data.email)
    console.log('Código de verificación:', data.code)
    // Aquí podrías agregar la lógica de validación del código

    // Redirigir al componente de restablecimiento de contraseña
    navigate('/new-password', { state: { email: data.email } })
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Restablecer contraseña</h1>
          <p className="text-center">Ingrese un correo válido para restablecer su contraseña.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <InputField
              id="email"
              type="text"
              name="email"
              placeholder="Correo electrónico"
              registration={register('email', {
                required: 'Este campo es requerido',
                pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' }
              })}
              error={errors.email?.message as string}
            />
            <InputField
              id="code"
              type="text"
              name="code"
              placeholder="Código de verificación"
              registration={register('code', {
                required: 'Este campo es requerido'
              })}
              error={errors.code?.message as string}
            />
          </div>
          <Button type="submit" className="w-full">
            Validar Código
          </Button>
        </form>
      </div>
    </div>
  )
}
