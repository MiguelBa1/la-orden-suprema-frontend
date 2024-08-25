import { MissionStatus } from '@models/enums'

export type AssassinDetails = {
  id: number;
  name: string;
  email: string;
  alias: string;
  address: string;
  status: 'active' | 'inactive';
  country: string;
  coins: number;
  photoUrl: string;
  missionsHistory: MissionHistory[];
  debsToPay: DebsToPay[];
  debsToCollect: DebsToCollect[];
}

export type MissionHistory = {
  id: number;
  description: string;
  status: MissionStatus;
  createdBy: string;
}

export type DebsToPay = {
  id: number;
  assignedTo: {
    id: number;
    name: string;
  };
  mission: string;
}

export type DebsToCollect = {
  id: number;
  createdBy: {
    id: number;
    name: string;
  };
  mission: string;
}
