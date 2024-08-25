import { AssassinDetails } from '@pages/admin'
import { assassinsDetailsMock } from '@pages/admin'

type UpdateAssassinStatusProps = {
  id: number;
  status: 'active' | 'inactive';
}

export function updateAssassinStatus({ id, status }: UpdateAssassinStatusProps) {
  return new Promise<AssassinDetails>((resolve) => {
    const assassinIndex = assassinsDetailsMock.findIndex(assassin => assassin.id === id)

    if (assassinIndex !== -1) {
      assassinsDetailsMock[assassinIndex].status = status
      resolve(assassinsDetailsMock[assassinIndex])
    }
  })
}
