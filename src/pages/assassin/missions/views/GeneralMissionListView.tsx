import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MissionStatus } from '@models/enums'
import { Button } from '@components/UI'
import { GeneralMissionTableColumns, getMissionList, MissionListTable } from '@pages/assassin'

export function GeneralMissionListView() {
  const generalMissionListQuery = useQuery({
    queryKey: ['general-missions', MissionStatus.PUBLISHED],
    queryFn: () => getMissionList({ status: MissionStatus.PUBLISHED }),
    staleTime: 1000 * 60 * 5,
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
      <MissionListTable missionListQuery={ generalMissionListQuery } missionTableColumns={ GeneralMissionTableColumns } />
    </div>

  )
}
