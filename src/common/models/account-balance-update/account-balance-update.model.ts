import { BaseModel } from "..";

export interface AccountBalanceUpdate extends BaseModel {
  accountId: string;
  oldSum: number;
  newSum: number;
  createdAt: string;
  updatedAt: string;
}
