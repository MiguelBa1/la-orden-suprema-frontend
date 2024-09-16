import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

type ProfilePayload = {
  country: string
  address: string
  profilePicture?: File
}

export async function updateProfile(profile: ProfilePayload) {
  const formData = new FormData()
  formData.append('country', profile.country)
  formData.append('address', profile.address)

  if (profile.profilePicture) {
    formData.append('profilePicture', profile.profilePicture)
  }

  const { data } = await axiosInstance.put<ResponseMessage>('/me', formData)

  return data
}
