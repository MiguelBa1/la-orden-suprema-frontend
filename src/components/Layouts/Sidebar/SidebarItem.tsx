import React, { useState, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'

type SubItemProps = {
  name: string;
  href: string;
};

type SidebarItemProps = {
  href?: string;
  Icon: React.ElementType;
  label: string;
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
  subMenuOpen: boolean;
  setSubMenuOpen: (value: boolean) => void;
  subItems?: SubItemProps[];
};

export function SidebarItem({ href, Icon, label, isOpen, setIsOpen, subMenuOpen, setSubMenuOpen, subItems }: SidebarItemProps) {
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
    <li className="w-full text-nowrap">
      { subItems && subItems.length > 0 ? (
        <button onClick={ toggleSubMenu }
          className={ `w-full cursor-pointer p-4 flex justify-start items-center
          gap-2 hover:bg-gray-700 transition-colors` }
        >
          <div className="size-8 flex-shrink-0">
            <Icon/>
          </div>
          <span className={ isOpen ? 'inline' : 'hidden' }>{ label }</span>
          <span className={ isOpen ? 'inline' : 'hidden' }>{ localSubMenuOpen ? '▲' : '▼' }</span>
        </button>
      ) : (
        <NavLink
          to={ href ?? '/' }
          className={ ({ isActive }) =>
            `cursor-pointer p-4 flex justify-start items-center
             ${isActive ? 'bg-gray-700' : ''} gap-2 hover:bg-gray-700 transition-colors`
          }
        >
          <div className="size-8 flex-shrink-0">
            <Icon/>
          </div>
          { isOpen && <span>{ label }</span> }
        </NavLink>
      ) }
      { subItems && localSubMenuOpen && (
        <ul className="bg-gray-700 text-left pl-6">
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
