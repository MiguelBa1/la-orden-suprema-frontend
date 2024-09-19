import { MissionPaymentType, MissionStatus } from '@models/enums'

export type MissionDetails = {
  _id: number;
  createdBy: {
    id: number;
    name: string;
  };
  assignedTo: {
    id: number;
    name: string;
  } | null;
  description: string;
  details: string;
  paymentType: MissionPaymentType
  coinsAmount: number | null;
  status: MissionStatus;
  imageUrl: string | null;
  createdAt: string;
  assignedAt: string | null;
}
