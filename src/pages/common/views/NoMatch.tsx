import { Link } from 'react-router-dom'
import { Button } from '@components/UI'

export function NoMatch() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-3xl">
        404 | Ruta no encontrada
        <span role="img" aria-label="sad face">
          😢
        </span>
      </h1>
      <Link to="/home">
        <Button>Ir a la página de inicio</Button>
      </Link>
    </div>
  )
}
