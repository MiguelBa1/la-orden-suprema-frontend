import { useQuery } from '@tanstack/react-query'
import { MissionStatus } from '@models/enums'
import { GeneralMissionTableColumns, getMissionList, MissionsListTable } from '@pages/assassin'

export function GeneralMissionListView() {
  const generalMissionListQuery = useQuery({
    queryKey: ['general-missions', MissionStatus.PUBLISHED],
    queryFn: () => getMissionList({ status: MissionStatus.PUBLISHED }),
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - General
        </h1>
      </div>
      <MissionsListTable missionListQuery={ generalMissionListQuery } missionTableColumns={ GeneralMissionTableColumns } />
    </div>

  )
}
