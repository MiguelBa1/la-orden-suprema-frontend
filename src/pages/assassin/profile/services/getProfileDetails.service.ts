import { ProfileDetails, profileDetailsMock } from '@pages/assassin'

export const getProfileDetails = async (id: number) => {
  return new Promise<ProfileDetails>((resolve, reject) => {
    setTimeout(() => {
      const profileDetails = profileDetailsMock.find((profile) => profile.id === id)

      if (!profileDetails) {
        reject(new Error('Profile not found'))
      }

      if (profileDetails && profileDetails.id === id) {
        resolve(profileDetails)
      }
    }, 500)
  })
}
