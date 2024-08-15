import { useQuery } from '@tanstack/react-query'
import { MissionStatus } from '@models/enums'
import { GeneralMissionTableColumns, getMissionList, MissionListTable } from '@pages/assassin'

export function GeneralMissionListView() {
  const generalMissionListQuery = useQuery({
    queryKey: ['general-missions', MissionStatus.PUBLISHED],
    queryFn: () => getMissionList({ status: MissionStatus.PUBLISHED }),
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-xl lg:text-2xl">
          Misiones - General
        </h1>
      </div>
      <MissionListTable missionListQuery={ generalMissionListQuery } missionTableColumns={ GeneralMissionTableColumns } />
    </div>

  )
}
