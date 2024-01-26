import { ApiBaseService } from "@/services";
import {
  Transaction,
  CreateTransactionDto,
  UpdateTransactionDto,
} from "@/common/models";
import { ApiEndPoint } from "@/common/enums";

export class TransactionService extends ApiBaseService<
  Transaction,
  CreateTransactionDto,
  UpdateTransactionDto
> {
  constructor() {
    super(ApiEndPoint.TRANSACTIONS);
  }
}

export const transactionService = new TransactionService();
