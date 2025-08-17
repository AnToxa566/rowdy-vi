import { BaseModel } from "..";

export interface AccountTransfer extends BaseModel {
  fromId: string;
  toId: string;
  sum: number;
  fromOldSum: number;
  toOldSum: number;
  fromNewSum: number;
  toNewSum: number;
}
