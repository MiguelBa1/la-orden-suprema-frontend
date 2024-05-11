import { useUser } from '@lib/index'

export function Home() {
  const { data: user } = useUser()

  return (
    <div className="p-10">
      <h1 className="text-2xl">
        Bienvenido al portal de asesinos de La Orden Suprema,
        { ' ' + user?.name }.
      </h1>
    </div>
  )
}
