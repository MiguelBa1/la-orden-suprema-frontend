import { useState } from 'react'
import { SidebarFooter, SidebarHeader, SidebarMenu } from './index'

export function DesktopSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [subMenusOpen, setSubMenusOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setSubMenusOpen(true)
    } else {
      setSubMenusOpen(false)
    }
  }

  return (
    <div className={ `hidden lg:flex flex-col justify-between min-h-screen ${isOpen ? 'w-64' : 'w-16'} bg-gray-800
     text-white transition-width duration-200` }>
      <div>
        <SidebarHeader isOpen={ isOpen } toggleSidebar={ toggleSidebar } />
        <SidebarMenu
          isOpen={ isOpen }
          setIsOpen={ setIsOpen }
          subMenuOpen={ subMenusOpen }
          setSubMenuOpen={ setSubMenusOpen }
        />
      </div>
      <SidebarFooter isOpen={ isOpen } />
    </div>
  )
}
