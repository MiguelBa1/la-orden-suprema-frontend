import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Dropdown, InputField, Spinner } from '@components/index'
import { getAssassinDetails } from '@pages/assassin'
import { getCountries } from '@services/getCountries.service'

type AssassinDetailsParams = {
  assassinId: string
}

export function AssassinDetailsView() {
  const { assassinId } = useParams<AssassinDetailsParams>()
  const navigate = useNavigate()

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: () => getCountries(),
    select: (data) => {
      return data.map((country) => ({
        label: country,
        value: country
      }))
    }
  })

  const assassinDetailsQuery = useQuery({
    queryKey: ['assassin', assassinId],
    queryFn: () => getAssassinDetails(assassinId),
  })

  const methods = useForm<FieldValues>({
    values: assassinDetailsQuery.data
  })

  const { register, control} = methods

  if (!assassinId) {
    return null
  }

  if (assassinDetailsQuery.isFetching) {
    return <div className="h-full flex justify-center items-center">
      <Spinner />
    </div>
  }

  if (assassinDetailsQuery.isError) {
    return <div className="h-full flex justify-center items-center">
      <p>Error al cargar la información del asesino</p>
    </div>
  }

  if (!assassinDetailsQuery.data) {
    return null
  }

  let profileImage = '/images/no-user-image.webp'
  if (assassinDetailsQuery.data.profilePicture?.buffer && assassinDetailsQuery.data.profilePicture.mimetype) {
    profileImage = `data:${assassinDetailsQuery.data.profilePicture.mimetype};base64,${assassinDetailsQuery.data.profilePicture.buffer}`
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Información del asesino
        </h1>
        <Button onClick={ () => navigate(-1) } variant="tertiary">
          Volver
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
        <div className="flex justify-center">
          <img
            src={ profileImage }
            alt="Foto del usuario"
            className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full"
          />
        </div>
        <form className="lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField
              id="name"
              label="Nombre"
              name="name"
              type="text"
              disabled
              registration={ register('name') }
            />
            <InputField
              id="alias"
              label="Pseudónimo"
              name="alias"
              type="text"
              disabled
              registration={ register('alias') }
            />
            <Controller
              name="country"
              control={ control }
              render={ ({ field }) => (
                <Dropdown
                  id="country"
                  label="País"
                  options={ countries }
                  onChange={ field.onChange }
                  value={ field.value }
                  disabled
                />
              ) }
            />
            <InputField
              id="address"
              label="Dirección"
              name="address"
              type="text"
              disabled
              registration={ register('address') }
            />
          </div>
        </form>
      </div>
    </div>
  )
}
