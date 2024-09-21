import { axiosInstance } from '@lib/axiosInstance'
import { ResponseMessage } from '@models/api'

type UpdateAssassinStatusProps = {
  id: string;
  status: 'active' | 'inactive';
}

export async function updateAssassinStatus({ id, status }: UpdateAssassinStatusProps) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/assassins/${id}/status`, { status })

  return data
}
