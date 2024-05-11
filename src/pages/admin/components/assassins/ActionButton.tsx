import { NavLink } from 'react-router-dom'
import { Button } from '@components/UI'

type ActionButtonProps = {
  assassinsId: number;
}

export function ActionButton({ assassinsId }: ActionButtonProps) {

  return (
    <NavLink to={ `/app/admin/assassins/${ assassinsId }` }>
      <Button>
        Abrir
      </Button>
    </NavLink>
  )
}
