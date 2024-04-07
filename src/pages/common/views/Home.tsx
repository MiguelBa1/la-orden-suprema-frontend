import { SubmitHandler, useForm, Controller, FieldValues } from 'react-hook-form'
import { Button, Dropdown, InputField } from '@components/index'
import { useLogout } from '@lib/react-query-auth'

const Home = () => {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const { mutate: logout } = useLogout()

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  const categoryOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  return (
    <>
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
    </>
  )
}

export default Home
