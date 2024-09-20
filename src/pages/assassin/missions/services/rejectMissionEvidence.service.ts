import { axiosInstance } from '@lib/axiosInstance'
import { ResponseMessage } from '@models/api'

type RejectMissionEvidenceProps = {
  missionId: string;
  assassinId: string | null;
}

export async function rejectMissionEvidence({ missionId, assassinId }: RejectMissionEvidenceProps) {
  if (!assassinId) {
    throw new Error('Assassin ID is required')
  }

  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${missionId}/reject-evidence`, {
    userId: assassinId
  })

  return data
}
