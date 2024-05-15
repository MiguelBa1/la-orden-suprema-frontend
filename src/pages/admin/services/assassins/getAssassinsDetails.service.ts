import { assassinsDetailsMock } from '@pages/admin/data'
import { AssassinDetails } from '@pages/admin'

export const getAssassinsDetails = async (id: number) => {
  return new Promise<AssassinDetails>((resolve, reject) => {
    setTimeout(() => {

      const assassinDetails = assassinsDetailsMock.find((assassin) => assassin.id === id)

      if (!assassinDetails) {
        reject(new Error('Assassin not found'))
      }
      if (assassinDetails && assassinDetails.id === id) {
        resolve(assassinDetails)
      }
    }, 500)
  })
}
