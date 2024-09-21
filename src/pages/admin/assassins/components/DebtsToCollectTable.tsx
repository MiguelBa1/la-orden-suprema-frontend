import { useQuery } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { DebsToCollectTableColumns, getDebts  } from '@pages/admin/assassins'

type DebsToCollectTableProps = {
  assassinId?: string
}

export function DebsToCollectTable({ assassinId }: DebsToCollectTableProps) {
  const debtsQuery = useQuery({
    queryKey: ['debsToPay', assassinId],
    queryFn: () => getDebts(assassinId)
  })

  if (!debtsQuery.data) {
    return null
  }

  if (debtsQuery.data.debtsToCollect.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay deudas a cobrar
    </div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base lg:text-xl">Cobros de deudas de sangre</h2>
      <Table columns={ DebsToCollectTableColumns } data={ debtsQuery.data.debtsToCollect } />
    </div>
  )
}
