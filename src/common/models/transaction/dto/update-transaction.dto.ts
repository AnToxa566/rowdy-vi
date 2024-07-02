import { TransactionType } from "@/common/enums";

export interface UpdateTransactionDto {
  sum: number;
  type: TransactionType;
  date: Date;
  account: string;
  category: string;
  description?: string;
}
