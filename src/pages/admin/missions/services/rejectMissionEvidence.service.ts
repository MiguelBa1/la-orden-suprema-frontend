import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

type RejectMissionEvidenceProps = {
  id: string
}

export async function rejectMissionEvidence({ id }: RejectMissionEvidenceProps) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${id}/reject-evidence`)

  return data
}
