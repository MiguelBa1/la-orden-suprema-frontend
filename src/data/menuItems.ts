import { UserRole } from '@models/enums'

type SubMenuItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href?: string;
  icon: string;
  roles: UserRole[];
  subItems?: SubMenuItem[];
};

const basePath = {
  [UserRole.ADMIN]: '/app/admin',
  [UserRole.ASSASSIN]: '/app/assassin',
}

const adminMenuItems: MenuItem[] = [
  { name: 'Asesinos', href: `${basePath[UserRole.ADMIN]}/assassins`, icon: '🔪', roles: [UserRole.ADMIN] },
  { name: 'Misiones', href: `${basePath[UserRole.ADMIN]}/missions`, icon: '🎯', roles: [UserRole.ADMIN] },
  { name: 'Transacciones', href: `${basePath[UserRole.ADMIN]}/transactions`, icon: '💰', roles: [UserRole.ADMIN] },
]

const assassinMenuItems: MenuItem[] = [
  { name: 'Asesinos', href: `${basePath[UserRole.ASSASSIN]}/assassins`, icon: '🔪', roles: [UserRole.ASSASSIN] },
  {
    name: 'Misiones',
    icon: '🎯',
    roles: [UserRole.ASSASSIN],
    subItems: [
      { name: 'General', href: `${basePath[UserRole.ASSASSIN]}/missions/general` },
      { name: 'Asignadas', href: `${basePath[UserRole.ASSASSIN]}/missions/assignments` },
      { name: 'Creadas por mí', href: `${basePath[UserRole.ASSASSIN]}/missions/created-by-me` },
    ],
  },
  { name: 'Transacciones', href: `${basePath[UserRole.ASSASSIN]}/transactions`, icon: '💰', roles: [UserRole.ASSASSIN] },
]

const commonMenuItems: MenuItem[] = [
  { name: 'Inicio', href: '/', icon: '🏠', roles: [UserRole.ADMIN, UserRole.ASSASSIN] },
]

export const menuItems: MenuItem[] = [
  ...commonMenuItems,
  ...assassinMenuItems,
  ...adminMenuItems,
]

