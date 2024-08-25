import { DebtsList, debtsListMock } from '@pages/assassin'

export function getDebtsList (_assassinId: number) {
  return new Promise<DebtsList>((resolve) => {
    setTimeout(() => {
      resolve(debtsListMock)
    }, 500)
  })
}
