import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '@components/UI'
import { AssassinsTable, ActionToolbar } from '@pages/admin/components'

export function AssassinsList() {
  const searchForm = useForm()

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-xl lg:text-2xl">
        Asesinos
        </h1>
        <NavLink to="/app/admin/assassins/create">
          <Button>
          Registrar asesino
          </Button>
        </NavLink>
      </div>
      <ActionToolbar searchForm={ searchForm } />
      <AssassinsTable />
    </div>
  )
}
