import { UserRole } from '@models/enums'
import React from "react"
import {
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline"

type SubMenuItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href?: string;
  Icon: React.ElementType;
  roles: UserRole[];
  subItems?: SubMenuItem[];
};

const basePath = {
  [UserRole.ADMIN]: '/app/admin',
  [UserRole.ASSASSIN]: '/app/assassin',
}

const adminMenuItems: MenuItem[] = [
  { name: 'Asesinos', href: `${basePath[UserRole.ADMIN]}/assassins`, Icon: UserGroupIcon, roles: [UserRole.ADMIN] },
  { name: 'Misiones', href: `${basePath[UserRole.ADMIN]}/missions`, Icon: ClipboardDocumentListIcon, roles: [UserRole.ADMIN] },
  { name: 'Transacciones', href: `${basePath[UserRole.ADMIN]}/transactions`, Icon: CurrencyDollarIcon, roles: [UserRole.ADMIN] },
]

const assassinMenuItems: MenuItem[] = [
  { name: 'Asesinos', href: `${basePath[UserRole.ASSASSIN]}/assassins`, Icon: UserGroupIcon, roles: [UserRole.ASSASSIN] },
  {
    name: 'Misiones',
    roles: [UserRole.ASSASSIN],
    subItems: [
      { name: 'General', href: `${basePath[UserRole.ASSASSIN]}/missions/general` },
      { name: 'Asignadas', href: `${basePath[UserRole.ASSASSIN]}/missions/assignments` },
      { name: 'Creadas por mí', href: `${basePath[UserRole.ASSASSIN]}/missions/created-by-me` },
    ],
    Icon: ClipboardDocumentListIcon,
  },
  { name: 'Transacciones', href: `${basePath[UserRole.ASSASSIN]}/transactions`, Icon: CurrencyDollarIcon, roles: [UserRole.ASSASSIN] },
  { name: 'Mi perfil', href: `${basePath[UserRole.ASSASSIN]}/profile`, Icon: UserCircleIcon, roles: [UserRole.ASSASSIN] },
]

export const menuItems: MenuItem[] = [
  ...assassinMenuItems,
  ...adminMenuItems,
]

