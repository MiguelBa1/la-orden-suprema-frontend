import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '@components/UI'
import { getMissionsList, MissionsListTable, MissionsTableToolbar } from '@pages/admin'

export function MissionsListView() {
  const searchForm = useForm()

  const MissionsListQuery = useQuery(
    {
      queryKey: ['missions', searchForm.getValues()],
      queryFn: () => getMissionsList(searchForm.getValues()),
    }
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones
        </h1>
        <Link to="#">
          <Button>
            Crear misión
          </Button>
        </Link>
      </div>
      <MissionsTableToolbar searchForm={ searchForm } refetchAssassinsList={ MissionsListQuery.refetch } />
      <MissionsListTable missionsListQuery={ MissionsListQuery } />
    </div>
  )
}
