export const menuItems = [
  { name: 'Inicio', href: '/home', icon: '🏠' },
  { name: 'Asesinos', href: '/assassins', icon: '🔪' },
  {
    name: 'Misiones',
    href: '/missions',
    icon: '🎯',
    subItems: [
      { name: 'General', href: '/missions/general' },
      { name: 'Asignadas', href: '/missions/assignments' },
      { name: 'Creadas por mí', href: '/missions/created-by-me' },
    ],
  },
  { name: 'Transacciones', href: '/transactions', icon: '💰' },
]
