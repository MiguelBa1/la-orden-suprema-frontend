import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserIcon } from '@heroicons/react/24/outline'
import { InputField, Button } from '@components/index'
import { useLogin, useUser } from '@lib/index'
import { useToastStore } from '@stores/index'
import { ForgotPasswordFormFields } from '@pages/auth/models'
import { UserRole } from '@models/enums'

export function ForgotPassword() {
  const { addToast } = useToastStore()
  const { data: user } = useUser()

  // Estado para manejar los pasos del flujo
  const [currentStep, setCurrentStep] = useState<'enterEmail' | 'enterCode' | 'resetPassword'>('enterEmail');
  const [email, setEmail] = useState<string | undefined>(undefined); // Estado para almacenar el email

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormFields>()

  const { mutateAsync: login, isPending } = useLogin({
    onSuccess: () => {
      addToast({
        message: '¡Contraseña reestablecida con éxito!',
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

  // Redirigir al usuario después de iniciar sesión basado en el rol
  useEffect(() => {
    if (user?.roles.includes(UserRole.ADMIN)) {
      navigate('/app/admin/home')
    } else if (user?.roles.includes(UserRole.ASSASSIN)) {
      navigate('/app/assassin/home')
    }
  }, [navigate, user])

  // Manejo del envío de formularios
  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = async (data) => {
    if (currentStep === 'enterEmail') {
      console.log('Correo enviado:', data.email);
      setEmail(data.email); // Almacena el email para su uso posterior
      setCurrentStep('enterCode');
    } else if (currentStep === 'enterCode') {
      console.log('Código de verificación:', data.code);
      setCurrentStep('resetPassword');
    } else if (currentStep === 'resetPassword') {
      console.log('Contraseña restablecida:', data.password);
      
      if (email) { // Asegúrate de que el email esté disponible
        const payload = {
          email: email, // Usa el email almacenado
          password: data.password
        };
        
        //await login(payload);
      } else {
        console.error('Error: No se encontró el email para proceder con el restablecimiento de contraseña.');
      }
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-1/5 space-y-8">
        <UserIcon className="m-auto w-32 h-32" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center">Restablecer contraseña</h1>
          <p className="text-center">
            {currentStep === 'enterEmail' && 'Ingrese un correo válido para restablecer su contraseña.'}
            {currentStep === 'enterCode' && 'Ingrese el código de verificación enviado a su correo.'}
            {currentStep === 'resetPassword' && 'Ingrese su nueva contraseña.'}
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          
          {currentStep === 'enterEmail' && (
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
            </div>
          )}

          {currentStep === 'enterCode' && (
            <div className="flex flex-col gap-1">
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
          )}

          {currentStep === 'resetPassword' && (
            <div className="flex flex-col gap-1">
              <InputField
                id="password"
                type="password"
                name="password"
                placeholder="Nueva contraseña"
                registration={register('password', {
                  required: 'Este campo es requerido'
                })}
                error={errors.password?.message as string}
              />
            </div>
          )}

          {currentStep === 'resetPassword' && (
            <div className="flex flex-col gap-1">
              <InputField
                id="password"
                type="password"
                name="password"
                placeholder="Confirmar contraseña"
                registration={register('password', {
                  required: 'Este campo es requerido'
                })}
                error={errors.password?.message as string}
              />
            </div>
          )}

          <div className="space-y-2 text-center">
            <Button type="submit" className="w-full">
              {isPending 
                ? currentStep === 'enterEmail' ? 'Enviando código...' 
                : currentStep === 'enterCode' ? 'Validando código...' 
                : 'Restableciendo contraseña...'
                : currentStep === 'enterEmail' ? 'Enviar Código'
                : currentStep === 'enterCode' ? 'Validar Código'
                : 'Restablecer Contraseña'
              }
            </Button>
          </div>

          {currentStep === 'enterCode' && (
            <div className="space-y-2 text-center">
              <Button 
                type="button"
                onClick={() => setCurrentStep('enterEmail')}
                className="w-full"
              >
                Reenviar Código
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}