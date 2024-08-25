import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MissionStatus } from '@models/enums'
import { Button } from '@components/UI'
import { GeneralMissionsTableColumns, getMissionsList, MissionsListTable } from '@pages/assassin'

export function GeneralMissionsListView() {
  const generalMissionListQuery = useQuery({
    queryKey: ['general-missions', MissionStatus.PUBLISHED],
    staleTime: 1000 * 60 * 5,
    queryFn: () => getMissionsList({ status: MissionStatus.PUBLISHED }),
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - General
        </h1>
        <NavLink to="/app/assassin/missions/new">
          <Button>
            Crear misión
          </Button>
        </NavLink>
      </div>
      <MissionsListTable missionListQuery={ generalMissionListQuery } missionTableColumns={ GeneralMissionsTableColumns } />
    </div>

  )
}
