import { MissionStatus } from '@pages/admin'

type MissionItem = {
  id: number;
  description: string;
  status: MissionStatus;
  createdBy: string;
  assignedTo?: string;
}

export type MissionsList = MissionItem[]
