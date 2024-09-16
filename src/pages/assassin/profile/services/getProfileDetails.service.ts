import { axiosInstance } from '@lib/axiosInstance.ts'
import { ProfileDetails } from '@pages/assassin'

export async function getProfileDetails() {
  const { data } = await axiosInstance.get<ProfileDetails>('/me')

  return data
}
