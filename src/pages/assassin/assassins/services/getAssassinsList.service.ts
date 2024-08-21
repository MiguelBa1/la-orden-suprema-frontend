import { assassinsListMock, AssassinTableRow } from '@pages/assassin'

type GetAssassinsListParams = {
  alias?: string;
}

export function getAssassinsList(_params: GetAssassinsListParams) {

  return new Promise<AssassinTableRow[]>((resolve) => {
    setTimeout(() => {
      resolve(assassinsListMock)
    }, 500)
  })
}
