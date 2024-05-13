import { useParams } from 'react-router-dom'

type AssassinDetailsParams = {
  assassinId: string
}

export function AssassinDetails() {
  const { assassinId } = useParams<AssassinDetailsParams>()

  return (
    <div>
      <h1 className="text-xl lg:text-2xl">
        Información de asesino
      </h1>
      { assassinId }
    </div>
  )
}
