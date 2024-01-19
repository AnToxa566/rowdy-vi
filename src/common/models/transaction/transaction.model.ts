import { BaseModel } from "@/common/models";
import { TransactionType } from "@/common/enums";

export interface Transaction extends BaseModel {
  name: string;
  sum: number;
  type: TransactionType;
  date: string;
  description?: string;
}
