import { NavLink } from 'react-router-dom'
import { Column, Button } from '@components/UI'
import { AssassinItem } from '@pages/assassin'

type AssassinsTableColumnsProps = {
  setBuyAssassinsDetailsModalIsOpen: (isOpen: boolean) => void;
  setCurrentAssassin: (assassin: AssassinItem) => void;
};

export const getAssassinsTableColumns = ({ setBuyAssassinsDetailsModalIsOpen, setCurrentAssassin }: AssassinsTableColumnsProps): Column<AssassinItem>[] => {
  return [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Pseudónimo', dataIndex: 'alias', key: 'alias' },
    { title: 'País', dataIndex: 'country', key: 'country' },
    { title: 'Acciones', key: 'actions', render: (record) => {
      const handleButtonClick = () => {
        if (!record.isPurchased) {
          setBuyAssassinsDetailsModalIsOpen(true)
          setCurrentAssassin(record)
        }
      }

      const buttonText = record.isPurchased ? 'Abrir' : 'Comprar Información'

      return record.isPurchased ? (
        <NavLink to={ `/app/assassin/assassins/${record.id}` }>
          <Button variant="tertiary">{ buttonText }</Button>
        </NavLink>
      ) : (
        <Button variant="tertiary" onClick={ handleButtonClick }>{ buttonText }</Button>
      )
    } },
  ]
}
