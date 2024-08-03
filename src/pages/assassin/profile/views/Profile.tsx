import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { EditProfileForm, getProfileDetails } from '@pages/assassin'
import { Spinner, Button } from '@components/UI'
import { useUser } from '@lib/react-query-auth.ts'

export function Profile() {

  const userId = useUser()?.data?.id
  const navigate = useNavigate()

  const profileDetailsQuery = useQuery(
    {
      queryKey: ['profile', userId],
      queryFn: () => getProfileDetails(Number(userId)),
      enabled: !!userId
    }
  )

  if (profileDetailsQuery.isFetching) {
    return <div className="h-full flex justify-center items-center">
      <Spinner />
    </div>
  }

  if (profileDetailsQuery.isError) {
    return <div className="h-full flex justify-center items-center">
      <p>Error al cargar la información del asesino</p>
    </div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Mi perfil
        </h1>
        <Button onClick={ () => navigate(-1) } variant="tertiary">
          Volver
        </Button>
      </div>
      <EditProfileForm profileDetailsQuery={ profileDetailsQuery } />
    </div>
  )
}
