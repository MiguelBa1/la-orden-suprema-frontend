import { UserRole } from '@models/index'

export const usersMock = [
  {
    id: 1,
    name: 'Gianna',
    email: 'admin@mail.com',
    password: 'pass',
    roles: [UserRole.ADMIN],
  },
  {
    id: 2,
    name: 'Jason Bourne',
    email: 'assassin@mail.com',
    password: 'pass',
    roles: [UserRole.ASSASSIN],
  },
  {
    id: 3,
    name: 'Prueba',
    email: 'test@test.com',
    password: 'pass',
    roles: [UserRole.ASSASSIN],
  }
]
