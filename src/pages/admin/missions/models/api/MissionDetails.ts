import { MissionPaymentType, MissionStatus } from '@models/enums'

export type MissionDetails = {
  _id: string;
  createdBy: {
    _id: string;
    name: string;
  };
  assignedTo: {
    _id: string;
    name: string;
  } | null;
  description: string;
  details: string;
  paymentType: MissionPaymentType
  coinsAmount: number | null;
  status: MissionStatus;
  createdAt: string;
  publishedAt: string | null;
  rejectedAt: string | null;
  assignedAt: string | null;
  completedAt: string | null;
  paidAt: string | null;
  evidence?: {
    buffer?: string
    mimetype?: string
  };
}
