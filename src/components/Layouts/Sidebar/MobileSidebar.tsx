import { useState, useEffect } from 'react'
import { SidebarFooter, SidebarHeader, SidebarMenu } from './index'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [subMenusOpen, setSubMenusOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setSubMenusOpen(true)
    } else {
      setSubMenusOpen(false)
    }
  }

  useEffect(() => {
    // Close the sidebar when the location changes
    setIsOpen(false)
    setSubMenusOpen(false)
  }, [location])

  return (
    <div className="lg:hidden">
      <div className="p-4 text-black top-0 left-0">
        <button onClick={ toggleSidebar }>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>
      <div
        className={ `lg:hidden fixed inset-0 bg-gray-800 text-white z-50 transform
                     ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform
                     duration-200 ease-in-out lg:hidden` }>
        <div className="flex flex-col justify-between h-full">
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
      </div>
    </div>
  )
}
