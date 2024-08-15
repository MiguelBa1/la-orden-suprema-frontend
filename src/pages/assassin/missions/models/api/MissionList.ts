import { MissionStatus } from '@models/enums'

export type MissionItem = {
  id: number;
  description: string;
  status: MissionStatus;
  created_by: {
    id: number;
    name: string;
  };
  assigned_to: {
    id: number;
    name: string;
  } | null;
}

export type MissionList = MissionItem[]
