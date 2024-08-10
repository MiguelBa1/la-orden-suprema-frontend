type MissionItem = {
  id: number;
  description: string;
  status: string;
  createdBy: string;
  assignedTo?: string;
}

export type MissionsList = MissionItem[]
