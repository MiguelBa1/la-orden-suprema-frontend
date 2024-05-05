import { Button } from '@components/index.ts'

export function NoMatch() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-3xl">
        404 | Ruta no encontrada
        <span role="img" aria-label="sad face">
          😢
        </span>
      </h1>
      <Button>
        <a href="/home">Ir a la página de inicio</a>
      </Button>
    </div>
  )
}
