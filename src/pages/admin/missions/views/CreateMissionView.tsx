import { CreateMissionForm } from '@pages/admin'

export function CreateMissionView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Crear una nueva misión
        </h1>
      </div>
      <CreateMissionForm/>
    </div>
  )
}
