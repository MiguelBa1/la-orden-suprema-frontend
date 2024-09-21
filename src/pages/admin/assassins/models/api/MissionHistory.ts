import { MissionStatus } from '@models/enums'

export type MissionHistory = {
  _id: number;
  description: string;
  status: MissionStatus;
  createdBy: string;
}

