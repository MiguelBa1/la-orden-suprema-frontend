import { MissionStatus } from '@models/enums'

export type MissionItem = {
  id: string;
  description: string;
  status: MissionStatus;
  createdBy: string;
  assignedTo?: string;
}

export type MissionsList = MissionItem[]
