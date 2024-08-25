import { SubmitHandler, useForm, Controller, FieldValues } from 'react-hook-form'
import { Dropdown, InputField, Button } from '@components/index'
import { categoryOptions } from '@pages/common/data'

export function FormExample() {
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <form onSubmit={ handleSubmit(onSubmit) }
          className="space-y-4"
        >
          <div>
            <InputField
              id="name"
              type="text"
              name="name"
              registration={ control.register('name', {
                required: "Este campo es requerido"
              }) }
              label="Name"
              error={ errors.name?.message as string }
            />
          </div>
          <div>
            <Controller
              name="category"
              control={ control }
              rules={ { required: "Este campo es requerido"} }
              render={ ({ field }) => (
                <Dropdown
                  id="category"
                  label="Category"
                  options={ categoryOptions }
                  onChange={ (value) => field.onChange(value) }
                  value={ field.value }
                  error={ errors.category?.message as string }
                />
              ) }
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}
