import { SubmitHandler, useForm, Controller, FieldValues } from 'react-hook-form'
import { Button, Dropdown, InputField, Table } from '@components/index'
import { useLogout } from '@lib/react-query-auth'
import { categoryOptions, taskColumns, tasksData } from '@pages/common/data'

const Home = () => {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const { mutate: logout } = useLogout()

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <div className="p-10 space-y-4">
      <div className="flex justify-center m-10">
        <form onSubmit={ handleSubmit(onSubmit) }
          className="space-y-4"
        >
          <div>
            <InputField
              id="name"
              type="text"
              registration={ control.register('name', {
                required: "Este campo es requerido"
              }) }
              label="Name"
            />
            { errors.name && <span className="text-red-500">{ errors.name.message as string }</span> }
          </div>
          <div>
            <Controller
              name="category"
              control={ control }
              rules={ { required: "Este campo es requerido"} }
              render={ ({ field }) => (
                <>
                  <Dropdown
                    label="Category"
                    options={ categoryOptions }
                    selectedValue={ categoryOptions.find(o => o.value === field.value) }
                    onChange={ (option) => field.onChange(option.value) }
                  />
                  { errors.category && <span className="text-red-500">
                    { errors.category.message as string }
                  </span> }
                </>
              ) }
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <Button onClick={ () => logout({}) }>Logout</Button>
      <Table
        columns={ taskColumns }
        data={ tasksData }
      />
    </div>
  )
}

export default Home
