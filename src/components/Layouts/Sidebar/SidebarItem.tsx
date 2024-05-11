import { useState, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'

type SubItemProps = {
  name: string;
  href: string;
};

type SidebarItemProps = {
  href?: string;
  icon: ReactNode;
  label: string;
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
  subMenuOpen: boolean;
  setSubMenuOpen: (value: boolean) => void;
  subItems?: SubItemProps[];
};

export function SidebarItem({ href, icon, label, isOpen, setIsOpen, subMenuOpen, setSubMenuOpen, subItems }: SidebarItemProps) {
  const [localSubMenuOpen, setLocalSubMenuOpen] = useState(false)

  if (!subMenuOpen && localSubMenuOpen) {
    setLocalSubMenuOpen(false)
  }

  const toggleSubMenu = (event: MouseEvent) => {
    event.preventDefault()
    if (setIsOpen) {
      setIsOpen(true)
    }
    if (subItems && subItems.length > 0) {
      setSubMenuOpen(true)
      setLocalSubMenuOpen(!localSubMenuOpen)
    }
  }

  return (
    <li className="w-full">
      { subItems && subItems.length > 0 ? (
        <div onClick={ toggleSubMenu } className={ `cursor-pointer p-4 flex justify-center
         gap-2 hover:bg-gray-700 transition-colors` }>
          { icon }
          <span className={ isOpen ? 'inline' : 'hidden' }>{ label }</span>
          <span className={ isOpen ? 'inline' : 'hidden' }>{ localSubMenuOpen ? '▲' : '▼' }</span>
        </div>
      ) : (
        <NavLink
          to={ href || '/' }
          className={ ({ isActive }) => `cursor-pointer p-4 flex justify-center
           ${isActive ? 'bg-gray-700' : ''} gap-2 hover:bg-gray-700 transition-colors` }>
          { icon }
          { isOpen && <span>{ label }</span> }
        </NavLink>
      ) }
      { subItems && localSubMenuOpen && (
        <ul className="bg-gray-700 text-center">
          { subItems.map(subItem => (
            <SubItem key={ subItem.name } name={ subItem.name } href={ subItem.href } />
          )) }
        </ul>
      ) }
    </li>
  )
}

function SubItem({ name, href }: SubItemProps) {
  return (
    <li className="hover:bg-gray-600">
      <NavLink to={ href } className="pl-8 pr-4 py-2 text-white block">{ name }</NavLink>
    </li>
  )
}
