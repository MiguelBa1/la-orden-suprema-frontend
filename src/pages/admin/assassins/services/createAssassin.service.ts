import { axiosInstance } from '@lib/axiosInstance'

type AssassinPayload = {
  name: string
  alias: string
  country: string
  address: string
  email: string
  profilePicture: File
}

export async function createAssassin(assassin: AssassinPayload) {
  const formData = new FormData()
  formData.append('name', assassin.name)
  formData.append('alias', assassin.alias)
  formData.append('country', assassin.country)
  formData.append('address', assassin.address)
  formData.append('email', assassin.email)
  formData.append('profilePicture', assassin.profilePicture)

  const { data } = await axiosInstance.post('/assassins', formData)

  return data
}
