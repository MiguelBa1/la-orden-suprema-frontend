import { MissionStatus } from '@models/enums'

export type MissionItem = {
  id: number;
  description: string;
  status: MissionStatus;
  createdBy: string;
  assignedTo: string | null;
}

export type MissionsList = MissionItem[]
