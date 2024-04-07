import { Button, Table } from '@components/index'
import { useLogout } from '@lib/react-query-auth'
import { taskColumns, tasksData } from '@pages/common/data'
import { FormExample } from '@pages/common/components'

export default function Home() {
  const { mutate: logout } = useLogout()

  return (
    <div className="p-10 space-y-4">
      <FormExample />
      <Button onClick={ () => logout({}) }>Logout</Button>
      <Table
        columns={ taskColumns }
        data={ tasksData }
      />
    </div>
  )
}
