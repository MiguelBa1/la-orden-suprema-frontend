import { useLogout } from '@lib/react-query-auth'
import { Button } from '@components/index'

export default function Home() {

  const { mutate: logout } = useLogout()

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={ () => logout({}) }>Logout</Button>
    </div>
  )
}
