import { useUser } from '@lib/index'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { formatUserRole } from '@utils/index'

type SidebarHeaderProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function SidebarHeader({ isOpen, toggleSidebar }: SidebarHeaderProps) {
  const { data: user } = useUser()

  if (!user) return null

  return (
    <div className="p-4 flex items-center justify-between h-20 text-nowrap">
      <div className={ isOpen ? `flex flex-col` : `hidden` }>
        <span>{ user.name }</span>
        <span className="text-sm text-gray-400">{ formatUserRole(user.role) }</span>
      </div>
      <button onClick={ toggleSidebar } className="text-white">
        { isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" /> }
      </button>
    </div>
  )
}
