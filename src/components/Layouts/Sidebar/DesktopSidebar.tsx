import { useState } from 'react'
import { SidebarFooter, SidebarHeader, SidebarItem } from './index'
import { menuItems } from '@data/index'

export function DesktopSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)

  const user = { name: 'Usuario', role: 'Administrador' }

  return (
    <div
      className={ `hidden lg:flex flex-col justify-between min-h-screen ${isOpen ? 'w-64' : 'w-16'}
                   bg-gray-800 text-white transition-width duration-200` }>
      <div>
        <SidebarHeader isOpen={ isOpen } toggleSidebar={ toggleSidebar } user={ user } />
        <nav>
          <ul>
            { menuItems.map((item) => (
              <SidebarItem
                key={ item.name }
                href={ item.href }
                icon={ item.icon }
                label={ item.name }
                isOpen={ isOpen }
              />
            )) }
          </ul>
        </nav>
      </div>
      <SidebarFooter isOpen={ isOpen } />
    </div>
  )
}
