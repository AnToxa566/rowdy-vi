import { Account, BaseModel, Category } from "..";

export interface Transaction extends BaseModel {
  sum: number;
  type: string;
  date: Date;
  account: Account;
  category: Category;
  description?: string;
}
