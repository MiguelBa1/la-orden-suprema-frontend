import { UserRole } from '@models/enums'

export function formatUserRole(role: UserRole): string {
  switch (role) {
    case UserRole.ADMIN:
      return "Administrador"
    case UserRole.ASSASSIN:
      return "Asesino"
    default:
      return "Usuario"
  }
}
