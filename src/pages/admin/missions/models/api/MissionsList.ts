import { MissionStatus } from '@models/enums'

export type MissionItem = {
  id: number;
  createdBy: string;
  assignedTo: string | null;
  description: string;
  status: MissionStatus;
}

export type MissionsList = MissionItem[]
