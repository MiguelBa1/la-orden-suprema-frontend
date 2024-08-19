import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Button, Spinner } from '@components/UI'
import { getMissionDetails, MissionDetailsActions, MissionDetailsForm } from '@pages/assassin'
import { MissionStatusLabel } from '@pages/admin'

type MissionDetailsParam = {
  missionId: string
}

export function MissionDetailsView() {
  const { missionId } = useParams<MissionDetailsParam>()
  const navigate = useNavigate()

  const missionDetailsQuery = useQuery(
    {
      queryKey: ['mission', missionId],
      queryFn: () => getMissionDetails(Number(missionId)),
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

  if (missionDetailsQuery.isError || !missionDetailsQuery.data) {
    return <div className="h-full flex justify-center items-center">
      <p>Error al cargar la información de la misión</p>
    </div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="mb-4">
          <h1 className="text-xl lg:text-2xl mb-4">
            { missionDetailsQuery.data.description }
          </h1>

          <MissionStatusLabel status={ missionDetailsQuery.data.status } />
        </div>

        <Button onClick={ () => navigate(-1) } variant="tertiary">
          Volver
        </Button>
      </div>
      <MissionDetailsForm missionDetailsQuery={ missionDetailsQuery } />
      <MissionDetailsActions missionDetailsQuery={ missionDetailsQuery } />
    </div>
  )
}
