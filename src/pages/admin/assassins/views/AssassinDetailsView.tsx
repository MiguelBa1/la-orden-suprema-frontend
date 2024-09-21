import { useIsFetching } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import {
  EditAssassinForm,
  MissionsHistoryTable,
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

  const isFetching = useIsFetching()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">Información del asesino</h1>
        <Button onClick={ () => navigate(-1) } variant="tertiary">
          Volver
        </Button>
      </div>

      { isFetching > 0 && (
        <div className="h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) }

      <div className={ `${isFetching > 0 ? 'hidden' : 'block'} space-y-6` }>
        <EditAssassinForm assassinId={ assassinId } />
        <hr className="border-t-2 border-gray-300" />
        <MissionsHistoryTable assassinId={ assassinId } />
        <hr className="border-t-2 border-gray-300" />
        <div className="grid lg:grid-cols-2 gap-4">
          <DebsToPayTable assassinId={ assassinId } />
          <DebsToCollectTable assassinId={ assassinId } />
        </div>
      </div>
    </div>
  )
}
