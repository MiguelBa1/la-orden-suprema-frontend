import { CreateAssassinForm } from '@pages/admin'

export function CreateAssassinView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Crear un nuevo asesino
        </h1>
      </div>
      <CreateAssassinForm/>
    </div>
  )
}
