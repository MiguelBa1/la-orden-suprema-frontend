import { UserRole } from '@models/enums'

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
