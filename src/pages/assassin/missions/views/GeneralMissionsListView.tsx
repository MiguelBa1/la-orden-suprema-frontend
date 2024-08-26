import { useQuery } from '@tanstack/react-query'
import { MissionStatus } from '@models/enums'
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
      </div>
      <MissionsListTable missionListQuery={ generalMissionListQuery } missionTableColumns={ GeneralMissionsTableColumns } />
    </div>

  )
}
