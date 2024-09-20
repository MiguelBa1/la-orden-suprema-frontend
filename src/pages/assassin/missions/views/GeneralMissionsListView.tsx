import { useQuery } from '@tanstack/react-query'
import { GeneralMissionsListTable, GeneralMissionsTableColumns, getGeneralMissionsList } from '@pages/assassin'

export function GeneralMissionsListView() {
  const generalMissionListQuery = useQuery({
    queryKey: ['generalMissions'],
    queryFn: getGeneralMissionsList,
    staleTime: 1000 * 60 * 5,
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - General
        </h1>
      </div>
      <GeneralMissionsListTable missionListQuery={ generalMissionListQuery } missionTableColumns={ GeneralMissionsTableColumns } />
    </div>

  )
}
