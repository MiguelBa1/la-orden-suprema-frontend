import { AssassinDetails } from '@pages/admin'
import { assassinsDetailsMock } from '@pages/admin'

export const updateAssassinStatus = async (id: number, newStatus: 'active' | 'inactive'): Promise<AssassinDetails> => {
  return new Promise((resolve) => {
    const assassinIndex = assassinsDetailsMock.findIndex(assassin => assassin.id === id)
    if (assassinIndex !== -1) {
      assassinsDetailsMock[assassinIndex].status = newStatus
      resolve(assassinsDetailsMock[assassinIndex])
    }
  })
}
