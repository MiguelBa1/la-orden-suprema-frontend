import { MissionPaymentType, MissionStatus } from '@models/enums'

export type MissionDetails = {
  id: number;
  created_by: {
    id: number;
    name: string;
  };
  assigned_to: {
    id: number;
    name: string;
  } | null;
  description: string;
  details: string;
  payment_type: MissionPaymentType
  coins_amount: number | null;
  status: MissionStatus;
  imageUrl: string | null;
  created_at: string;
  assigned_at: string | null;
}
