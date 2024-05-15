import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { EditAssassinForm, getAssassinsDetails } from '@pages/admin'
import { Spinner, Button } from '@components/UI'

type AssassinDetailsParams = {
  assassinId: string
}

export function AssassinDetailsView() {
  const { assassinId } = useParams<AssassinDetailsParams>()
  const navigate = useNavigate()

  const assassinDetailsQuery = useQuery(
    {
      queryKey: ['assassin', assassinId],
      queryFn: () => getAssassinsDetails(Number(assassinId)),
      enabled: !!assassinId
    }
  )

  if (!assassinId) {
    return null
  }

  if (assassinDetailsQuery.isLoading) {
    return <div className="h-96 flex justify-center items-center">
      <Spinner />
    </div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
        Información de asesino
        </h1>
        <Button
          onClick={ () => navigate(-1) }
        >
          Volver
        </Button>
      </div>
      <EditAssassinForm assassinDetailsQuery={ assassinDetailsQuery } />
    </div>
  )
}
