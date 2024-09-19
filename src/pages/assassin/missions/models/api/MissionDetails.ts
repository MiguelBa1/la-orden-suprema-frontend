import { MissionPaymentType, MissionStatus } from '@models/enums'

export type MissionDetails = {
  _id: string;
  createdBy: string;
  assignedTo: string | null;
  description: string;
  details: string;
  paymentType: MissionPaymentType
  coinsAmount: number | null;
  status: MissionStatus;
  imageUrl: string | null;
  createdAt: string;
  assignedAt: string | null;
}
