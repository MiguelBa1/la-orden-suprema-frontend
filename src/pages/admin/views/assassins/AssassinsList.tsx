import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '@components/UI'
import { AssassinsTable, ActionToolbar, getAssassinsList } from '@pages/admin'

export function AssassinsList() {
  const searchForm = useForm()

  const AssassinsListQuery = useQuery(
    {
      queryKey: ['assassins', searchForm.getValues()],
      queryFn: () => getAssassinsList(searchForm.getValues()),
    }
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
        Asesinos
        </h1>
        <NavLink to="/app/admin/assassins/create">
          <Button>
          Registrar asesino
          </Button>
        </NavLink>
      </div>
      <ActionToolbar searchForm={ searchForm } refetchAssassinsList={ AssassinsListQuery.refetch } />
      <AssassinsTable assassinsListQuery={ AssassinsListQuery } />
    </div>
  )
}
