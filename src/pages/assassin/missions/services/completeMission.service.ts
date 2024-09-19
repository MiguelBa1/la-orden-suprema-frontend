import { axiosInstance } from '@lib/axiosInstance'
import { ResponseMessage } from '@models/api'

type CompleteMissionProps = {
  id: string
  evidence: File
}

export async function completeMission({ id, evidence }: CompleteMissionProps) {
  const formData = new FormData()
  formData.append('evidence', evidence)

  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${id}/complete`, formData)

  return data
}
