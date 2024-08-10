import { useNavigate, useParams } from 'react-router-dom'
import { getMissionDetailsService, MissionDetailsActions, MissionDetailsForm } from '@pages/admin'
import { Button, Spinner } from '@components/UI'
import { useQuery } from '@tanstack/react-query'

type MissionDetailsParam = {
  missionId: string
}

export function MissionDetailsView() {
  const { missionId } = useParams<MissionDetailsParam>()
  const navigate = useNavigate()

  const missionDetailsQuery = useQuery(
    {
      queryKey: ['mission', missionId],
      queryFn: () => getMissionDetailsService(Number(missionId)),
      enabled: !!missionId
    }
  )

  if (!missionId) {
    return null
  }

  if (missionDetailsQuery.isFetching) {
    return <div className="h-full flex justify-center items-center">
      <Spinner />
    </div>
  }

  if (missionDetailsQuery.isError) {
    return <div className="h-full flex justify-center items-center">
      <p>Error al cargar la información de la misión</p>
    </div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Información de la misión: { missionDetailsQuery.data?.description } ({ missionDetailsQuery.data?.status })
        </h1>
        <Button onClick={ () => navigate(-1) } variant="tertiary">
          Volver
        </Button>
      </div>
      <MissionDetailsForm missionDetailsQuery={ missionDetailsQuery }/>
      <MissionDetailsActions missionDetailsQuery={ missionDetailsQuery }/>
    </div>
  )
}

