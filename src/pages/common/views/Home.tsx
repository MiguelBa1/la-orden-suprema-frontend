import { Table } from '@components/UI'
import { tasks, columns } from '@pages/common/data'
import { FormExample } from '@pages/common/components'

export function Home() {

  return (
    <div className="p-10 space-y-4">
      <FormExample />
      <Table
        columns={ columns }
        data={ tasks }
      />
    </div>
  )
}
