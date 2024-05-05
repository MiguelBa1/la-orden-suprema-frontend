import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

type SidebarHeaderProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  user: {
    name: string;
    role: string;
  }
}

export function SidebarHeader({ isOpen, toggleSidebar, user }: SidebarHeaderProps) {
  return (
    <div className="p-4 flex items-center justify-between h-20">
      <div className={ isOpen ? `flex flex-col` : `hidden` }>
        <span>{ user.name }</span>
        <span className="text-sm text-gray-400">{ user.role }</span>
      </div>
      <button onClick={ toggleSidebar } className="text-white">
        { isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" /> }
      </button>
    </div>
  )
}
