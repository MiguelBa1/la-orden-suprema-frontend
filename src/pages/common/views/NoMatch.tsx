import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@components/UI'
import { useLogout } from '@lib/index'

export function NoMatch() {
  const { mutateAsync: logout } = useLogout()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-3xl">
        404 | Ruta no encontrada
        <span role="img" aria-label="sad face">
          😢
        </span>
      </h1>
      <Link to="/">
        <Button>Ir a la página de inicio</Button>
      </Link>
      <Button onClick={ async () => {
        navigate(-1)
      } }>
        Regresar a la página anterior
      </Button>
      <Button onClick={ async () => {
        await logout({})
        navigate('/')
      } }>Cerrar sesión</Button>
    </div>
  )
}
