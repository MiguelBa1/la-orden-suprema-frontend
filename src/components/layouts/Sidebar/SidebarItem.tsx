import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'

type SidebarItemProps = {
  href: string;
  icon: ReactNode;
  label: string;
  isOpen: boolean;
}

export default function SidebarItem({ href, icon, label, isOpen }: SidebarItemProps) {
  return (
    <li className="w-full">
      <NavLink
        to={ href }
        className={ ({ isActive }) => `p-4 flex justify-center gap-2 ${isActive ? 'bg-gray-700' : ''} hover:bg-gray-700 transition-colors` }
      >
        { icon }
        <span className={ isOpen ? 'inline' : 'hidden' }>{ label }</span>
      </NavLink>
    </li>
  )
}
