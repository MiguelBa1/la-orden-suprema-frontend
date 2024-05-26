import { NavLink } from 'react-router-dom'
import { Button } from '@components/UI'

type ActionButtonProps = {
  assassinId: number;
}

export function ActionButton({ assassinId }: ActionButtonProps) {

  return (
    <NavLink to={ `/app/admin/assassins/${ assassinId }` }>
      <Button
        variant="tertiary"
      >
        Abrir
      </Button>
    </NavLink>
  )
}
