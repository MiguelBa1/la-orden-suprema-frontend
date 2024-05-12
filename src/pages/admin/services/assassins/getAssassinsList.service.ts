import { assassinsListMock, Assassin } from '@pages/admin'

type GetAssassinsListParams = {
  name?: string;
  alias?: string;
  status?: string;
  email?: string;
  location?: string;
}

export function getAssassinsList(_params: GetAssassinsListParams) {

  return new Promise<Assassin[]>((resolve) => {
    setTimeout(() => {
      resolve(assassinsListMock)
    }, 1000)
  })
}
