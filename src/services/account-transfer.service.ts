import { ApiBaseService } from "@/services";
import { ApiEndPoint } from "@/common/enums";
import {
  AccountTransfer,
  CreateAccountTransferDto,
  UpdateAccountTransferDto,
} from "@/common/models";

export class AccountTransferService extends ApiBaseService<
  AccountTransfer,
  CreateAccountTransferDto,
  UpdateAccountTransferDto
> {
  constructor() {
    super(ApiEndPoint.ACCOUNT_TRANSFERS);
  }
}

export const accountTransferService = new AccountTransferService();
