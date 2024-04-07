import { SubmitHandler, useForm, Controller, FieldValues } from 'react-hook-form'
import { Button, Dropdown, InputField, Table } from '@components/index'
import { useLogout } from '@lib/react-query-auth'
import { categoryOptions, taskColumns, tasksData } from '@pages/common/data'
import { FormExample } from '@pages/common/components'

export default function Home() {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const { mutate: logout } = useLogout()

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

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
