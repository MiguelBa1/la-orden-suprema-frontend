import { useQuery } from '@tanstack/react-query'
import { useUser } from '@lib/react-query-auth.ts'
import { AssignedMissionsTableColumns, getMissionList, MissionsListTable, AssignedMissionsTableToolbar } from '@pages/assassin'
import { useForm } from 'react-hook-form'

export function AssignedMissionListView() {
  const searchForm = useForm()
  const userName = useUser()?.data?.name

  const assignedMissionListQuery = useQuery({
    queryKey: ['assigned-missions', userName],
    queryFn: () => getMissionList({ ...searchForm.getValues(), assignedTo: userName }),
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - Asignadas
        </h1>
      </div>
      <AssignedMissionsTableToolbar searchForm={ searchForm } refetchMissionList={ assignedMissionListQuery.refetch } />
      <MissionsListTable missionListQuery={ assignedMissionListQuery } missionTableColumns={ AssignedMissionsTableColumns } />
    </div>
  )
}
