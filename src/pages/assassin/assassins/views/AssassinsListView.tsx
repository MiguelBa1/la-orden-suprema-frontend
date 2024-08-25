import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { AssassinsTable, AssassinsToolbar, getAssassinsList } from '@pages/assassin'

export function AssassinsListView() {
  const searchForm = useForm()

  const AssassinsListQuery = useQuery(
    {
      queryKey: ['assassins', searchForm.getValues()],
      queryFn: () => getAssassinsList(searchForm.getValues()),
      staleTime: 1000 * 60 * 5,
    }
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Asesinos
        </h1>
      </div>
      <AssassinsToolbar searchForm={ searchForm } refetchAssassinsList={ AssassinsListQuery.refetch } />
      <AssassinsTable assassinsListQuery={ AssassinsListQuery } />
    </div>
  )
}
