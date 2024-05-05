import { useLogout } from '@lib/react-query-auth'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'

type SidebarFooterProps = {
  isOpen: boolean;
}

export function SidebarFooter({ isOpen }: SidebarFooterProps) {
  const { mutate: logout } = useLogout()
  return (
    <div className="border-t border-gray-600 hover:text-gray-300 h-14">
      <button
        className="p-4 w-full flex gap-2 justify-center items-center"
        onClick={ () => logout({}) }
      >
        <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
        <span className={ `${isOpen ? 'inline' : 'hidden'} text-nowrap` }>Cerrar sesión</span>
      </button>
    </div>
  )
}
