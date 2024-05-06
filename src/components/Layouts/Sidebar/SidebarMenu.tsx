import { SidebarItem } from './index'
import { menuItems } from '@data/index'

type SidebarMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  subMenuOpen: boolean;
  setSubMenuOpen: (isOpen: boolean) => void;
};

export function SidebarMenu({ isOpen, setIsOpen, subMenuOpen, setSubMenuOpen }: SidebarMenuProps) {
  return (
    <nav>
      <ul>
        { menuItems.map((item) => (
          <SidebarItem
            key={ item.name }
            href={ item.href }
            icon={ item.icon }
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
