import { axiosInstance } from '@lib/axiosInstance'

type UpdateAssassinsDetailsProps = {
  id: string
  data: {
    name: string
    alias: string
    country: string
    address: string
  }
}

export async function updateAssassinDetails({ id, data }: UpdateAssassinsDetailsProps) {
  if (!id) {
    throw new Error('No id provided')
  }

  const { data: updatedAssassin } = await axiosInstance.put(`/assassins/${id}`, data)

  return updatedAssassin
}
