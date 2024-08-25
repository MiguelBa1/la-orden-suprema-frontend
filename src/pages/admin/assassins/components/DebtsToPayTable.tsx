import { UseQueryResult } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { DebsToPayTableColumns, type AssassinDetails } from '@pages/admin/assassins'

type DebsToPayTableProps = {
  assassinDetailsQuery: UseQueryResult<AssassinDetails>
}

export function DebsToPayTable({ assassinDetailsQuery }: DebsToPayTableProps) {
  if (assassinDetailsQuery.data?.debsToPay.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay deudas para mostrar
    </div>
  }

  if (!assassinDetailsQuery.data) {
    return null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base lg:text-xl">Deudas pendientes</h2>
      <Table columns={ DebsToPayTableColumns } data={ assassinDetailsQuery.data.debsToPay } />
    </div>
  )
}
