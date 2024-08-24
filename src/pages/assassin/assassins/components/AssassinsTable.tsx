import { useState } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { Table, Spinner } from '@components/UI'
import { AssassinTableRow, getAssassinsTableColumns, BuyAssassinsDetailsModal } from '@pages/assassin'

type AssassinsTableProps = {
  assassinsListQuery: UseQueryResult<AssassinTableRow[]>;
}

export function AssassinsTable({ assassinsListQuery }: AssassinsTableProps) {
  const [buyAssassinsDetailsModalIsOpen, setBuyAssassinsDetailsModalIsOpen] = useState(false)
  const [currentAssassin, setCurrentAssassin] = useState<AssassinTableRow | null>(null)

  if (assassinsListQuery.isFetching) {
    return <div className="flex justify-center items-center h-96">
      <Spinner />
    </div>
  }

  if (assassinsListQuery.isError) {
    return <div className="flex justify-center items-center h-96">
      Error obteniendo la lista de asesinos
    </div>
  }

  if (assassinsListQuery.data?.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No se encontraron resultados
    </div>
  }

  if (!assassinsListQuery.data) {
    return null
  }

  const AssassinsTableColumns = getAssassinsTableColumns({ setBuyAssassinsDetailsModalIsOpen, setCurrentAssassin })

  return (
    <>
      <Table columns={ AssassinsTableColumns } data={ assassinsListQuery.data } />
      <BuyAssassinsDetailsModal
        isOpen={ buyAssassinsDetailsModalIsOpen }
        onClose={ () => setBuyAssassinsDetailsModalIsOpen(false) }
        assassin={ currentAssassin }
      />
    </>
  )

}
