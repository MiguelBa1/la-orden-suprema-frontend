import { MissionStatus } from '@models/enums'

export type CreatedByMeMissionItem = {
  _id: number;
  description: string;
  status: MissionStatus;
  assignedTo: string | null;
}

export type CreatedByMeMissionsList = CreatedByMeMissionItem[]
