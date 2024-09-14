import { AssassinStatus } from '@models/enums'

export type AssassinItem = {
  _id: number;
  name: string;
  email: string;
  alias: string;
  status: AssassinStatus;
  country: string;
}

export type AssassinsList = AssassinItem[]
