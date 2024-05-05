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
    </div>
  )
}
