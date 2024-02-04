import { BaseModel } from "..";

export interface Transaction extends BaseModel {
  name: string;
  sum: number;
  type: string;
  date: Date;
  account: string;
  description?: string;
}
