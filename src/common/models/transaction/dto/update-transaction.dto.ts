import { TransactionType } from "@/common/enums";

export interface UpdateTransactionDto {
  name: string;
  sum: number;
  type: TransactionType;
  date: Date;
  account: string;
  description?: string;
}
