import { assassinsListMock, AssassinsList } from '@pages/assassin'

type GetAssassinsListParams = {
  alias?: string;
}

export function getAssassinsList(_params: GetAssassinsListParams) {
  return new Promise<AssassinsList>((resolve) => {
    setTimeout(() => {
      resolve(assassinsListMock)
    }, 500)
  })
}
