import { BaseService } from "@/services";
import { StorageKey } from "@/common/enums";
import {
  Transaction,
  CreateTransactionDto,
  UpdateTransactionDto,
} from "@/common/models";

export class TransactionService extends BaseService<
  Transaction,
  CreateTransactionDto,
  UpdateTransactionDto
> {
  constructor() {
    super(StorageKey.TRANSACTIONS);
  }
}

export const transactionService = new TransactionService();
