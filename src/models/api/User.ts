import { UserRole } from '@models/enums'

export type User = {
  _id: string;
  address: string;
  alias: string;
  country: string;
  email: string;
  name: string;
  profilePicture: File;
  role: UserRole;
}
