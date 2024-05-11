import { Table } from '@components/UI'
import { assassinsListMock, AssassinsTableColumns } from '@pages/admin/data'

export function AssassinsTable() {

  return (
    <Table
      columns={ AssassinsTableColumns }
      data={ assassinsListMock }
    />
  )
}
