import { MissionStatus } from '@models/enums'

export type MissionItem = {
  _id: string;
  createdBy: string;
  assignedTo: string | null;
  description: string;
  status: MissionStatus;
}

export type MissionsList = MissionItem[]
