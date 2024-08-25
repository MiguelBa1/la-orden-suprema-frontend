import { MissionDetails, missionsDetailsMock } from '@pages/admin'

export function getMissionDetailsService(id: number) {
  return new Promise<MissionDetails>((resolve, reject) => {
    setTimeout(() => {
      const missionDetails = missionsDetailsMock.find((mission) => mission.id === id)

      if (!missionDetails) {
        reject(new Error('Mission not found'))
      }

      if (missionDetails && missionDetails.id === id) {
        resolve(missionDetails)
      }
    }, 500)
  })
}
