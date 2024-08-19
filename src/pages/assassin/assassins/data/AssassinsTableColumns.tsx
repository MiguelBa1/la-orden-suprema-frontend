import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { AssassinTableRow } from '@pages/assassin'

export const AssassinsTableColumns: Column<AssassinTableRow>[] = [
  { title: 'Nombre', dataIndex: 'name', key: 'name' },
  { title: 'Pseudónimo', dataIndex: 'alias', key: 'alias' },
  { title: 'País', dataIndex: 'country', key: 'country' },
  { title: 'Acciones', key: 'actions', render: (record) => {
    const buttonText = record.isPurchased ? 'Abrir' : 'Comprar Información'

    return (
      <NavLink to={ `/app/assassin/assassins/${ record.id }` }>
        <Button variant="tertiary">{ buttonText }</Button>
      </NavLink>
    )
  } },
]
