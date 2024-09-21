export type DebtsToCollect = {
  _id: number;
  createdBy: {
    _id: number;
    name: string;
  };
  missionId: string;
  paidMission?: string;
}

export type DebtsToPay = {
  _id: number;
  createdMission: string;
  paidMission?: string;
  paidTo: {
    _id: number;
    name: string;
  } | null;
}

export type Debts = {
  debtsToCollect: DebtsToCollect[];
  debtsToPay: DebtsToPay[];
}
