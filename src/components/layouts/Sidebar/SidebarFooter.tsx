import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'

type SidebarFooterProps = {
  isOpen: boolean;
}

const SidebarFooter = ({ isOpen }: SidebarFooterProps) => {
  return (
    <div className="border-t border-gray-600 p-4">
      <button className="w-full flex items-center justify-center space-x-2 hover:text-gray-300">
        <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
        <span className={ isOpen ? 'inline' : 'hidden' }>Cerrar sesión</span>
      </button>
    </div>
  )
}

export default SidebarFooter
