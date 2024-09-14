import { SidebarItem } from './index'
import { menuItems } from '@data/index'
import { useUser } from '@lib/index'

type SidebarMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  subMenuOpen: boolean;
  setSubMenuOpen: (isOpen: boolean) => void;
};

export function SidebarMenu({ isOpen, setIsOpen, subMenuOpen, setSubMenuOpen }: SidebarMenuProps) {
  const { data: user } = useUser()
  const userRoles = user?.role

  const visibleMenuItems = menuItems.filter(menuItem =>
    menuItem.roles.some(role => userRoles?.includes(role))
  )

  return (
    <nav>
      <ul>
        { visibleMenuItems.map((item) => (
          <SidebarItem
            key={ item.name }
            href={ item.href }
            Icon={ item.Icon }
            label={ item.name }
            isOpen={ isOpen }
            setIsOpen={ setIsOpen }
            subMenuOpen={ subMenuOpen }
            setSubMenuOpen={ setSubMenuOpen }
            subItems={ item.subItems }
          />
        )) }
      </ul>
    </nav>
  )
}
