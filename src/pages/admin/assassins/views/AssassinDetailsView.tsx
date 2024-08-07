import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import {
  EditAssassinForm,
  MissionsHistoryTable,
  getAssassinsDetails,
  DebsToPayTable,
  DebsToCollectTable,
} from '@pages/admin/assassins'
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

  if (assassinDetailsQuery.isFetching) {
    return <div className="h-full flex justify-center items-center">
      <Spinner />
    </div>
  }

  if (assassinDetailsQuery.isError) {
    return <div className="h-full flex justify-center items-center">
      <p>Error al cargar la información del asesino</p>
    </div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Información del asesino
        </h1>
        <Button
          onClick={ () => navigate(-1) }
          variant="tertiary"
        >
          Volver
        </Button>
      </div>
      <EditAssassinForm assassinDetailsQuery={ assassinDetailsQuery } />
      <hr className="border-t-2 border-gray-300" />
      <MissionsHistoryTable assassinsDetailsQuery={ assassinDetailsQuery } />
      <hr className="border-t-2 border-gray-300" />
      <div className="grid lg:grid-cols-2 gap-4">
        <DebsToPayTable assassinDetailsQuery={ assassinDetailsQuery } />
        <DebsToCollectTable assassinDetailsQuery={ assassinDetailsQuery } />
      </div>
    </div>
  )
}
