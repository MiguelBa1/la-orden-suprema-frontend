import { UseQueryResult } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { DebsToCollectTableColumns, type AssassinDetails } from '@pages/admin/assassins'

type DebsToCollectTableProps = {
  assassinDetailsQuery: UseQueryResult<AssassinDetails>
}

export function DebsToCollectTable({ assassinDetailsQuery }: DebsToCollectTableProps) {
  if (assassinDetailsQuery.data?.debsToCollect.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay deudas para mostrar
    </div>
  }

  if (!assassinDetailsQuery.data) {
    return null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base lg:text-xl">Deudas a cobrar</h2>
      <Table columns={ DebsToCollectTableColumns } data={ assassinDetailsQuery.data.debsToCollect } />
    </div>
  )
}
