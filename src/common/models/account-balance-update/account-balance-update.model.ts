import { AccountBalanceUpdateType } from "../../enums";

import { BaseModel } from "../base";

export interface AccountBalanceUpdate extends BaseModel {
  accountId: string;
  oldSum: number;
  newSum: number;
  type?: AccountBalanceUpdateType;
  createdAt: string;
  updatedAt: string;
}
