import { useQuery } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { DebsToPayTableColumns, getDebts } from '@pages/admin/assassins'

type DebsToPayTableProps = {
  assassinId?: string
}

export function DebsToPayTable({ assassinId }: DebsToPayTableProps) {
  const debtsQuery = useQuery({
    queryKey: ['debsToPay', assassinId],
    queryFn: () => getDebts(assassinId)
  })

  if (!debtsQuery.data) {
    return null
  }

  if (debtsQuery.data?.debtsToPay.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay deudas a pagar
    </div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base lg:text-xl">Deudas de sangre</h2>
      <Table columns={ DebsToPayTableColumns } data={ debtsQuery.data?.debtsToPay } />
    </div>
  )
}
