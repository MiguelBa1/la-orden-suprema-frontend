import { MissionStatus } from '@models/enums'

export type MissionItem = {
  _id: string;
  description: string;
  status: MissionStatus;
  createdBy: string;
  assignedTo: string | null;
}

export type MissionsList = MissionItem[]
