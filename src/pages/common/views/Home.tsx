import { Table } from '@components/index'
import { taskColumns, tasksData } from '@pages/common/data'
import { FormExample } from '@pages/common/components'

export default function Home() {

  return (
    <div className="p-10 space-y-4">
      <FormExample />
      <Table
        columns={ taskColumns }
        data={ tasksData }
      />
    </div>
  )
}
