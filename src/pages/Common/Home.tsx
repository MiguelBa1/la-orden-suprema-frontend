import { useLogout } from '@lib/react-query-auth.ts'
import { Button } from '@components/index.ts'

export default function Home() {

  const { mutate: logout } = useLogout()

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={ () => logout({}) }>Logout</Button>
    </div>
  )
}
