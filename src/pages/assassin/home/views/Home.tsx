import { useUser } from '@lib/index.ts'

export function Home() {
  const { data: user } = useUser()

  return (
    <div>
      <h1 className="text-2xl">
        Bienvenido al portal de asesinos de La Orden Suprema,
        { ' ' + user?.name }.
      </h1>
    </div>
  )
}
