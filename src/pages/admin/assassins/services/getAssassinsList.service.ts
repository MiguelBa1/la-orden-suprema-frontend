import { assassinsListMock, AssassinTableRow } from '@pages/admin'

type GetAssassinsListParams = {
  name?: string;
  alias?: string;
  status?: string;
  email?: string;
  location?: string;
}

export function getAssassinsList(_params: GetAssassinsListParams) {

  return new Promise<AssassinTableRow[]>((resolve) => {
    setTimeout(() => {
      resolve(assassinsListMock)
    }, 500)
  })
}
