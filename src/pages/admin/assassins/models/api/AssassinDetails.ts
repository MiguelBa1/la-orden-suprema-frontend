export type AssassinDetails = {
  id: number;
  name: string;
  email: string;
  alias: string;
  address: string;
  phone: string;
  status: 'active' | 'inactive';
  country: string;
  coins: number;
  photoUrl: string;
  missionsHistory: MissionHistory[];
}

export type MissionHistory = {
  id: number;
  description: string;
  status: 'completed' | 'failed' | 'assigned' | 'paid';
  creator: string;
}
