import { UserRole } from '@models/enums'

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
