import { axiosInstance } from '@lib/axiosInstance'

type UpdateAssassinsDetailsProps = {
  id: string
  data: {
    name: string
    alias: string
    country: string
    address: string
    profilePicture: File
  }
}

export async function updateAssassinDetails({ id, data }: UpdateAssassinsDetailsProps) {
  if (!id) {
    throw new Error('No id provided')
  }

  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('alias', data.alias)
  formData.append('country', data.country)
  formData.append('address', data.address)

  if (data.profilePicture) {
    formData.append('profilePicture', data.profilePicture)
  }

  const { data: updatedAssassin } = await axiosInstance.put(`/assassins/${id}`, formData)

  return updatedAssassin
}
