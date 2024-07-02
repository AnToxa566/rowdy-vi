import { BaseModel } from "..";

export interface Transaction extends BaseModel {
  sum: number;
  type: string;
  date: Date;
  account: string;
  category: string;
  description?: string;
}
