import { ApiBaseService } from "@/services";
import { ApiEndPoint } from "@/common/enums";
import {
  AccountBalanceUpdate,
  CreateAccountBalanceUpdateDto,
  UpdateAccountBalanceUpdateDto,
} from "@/common/models";

export class AccountBalanceUpdateService extends ApiBaseService<
  AccountBalanceUpdate,
  CreateAccountBalanceUpdateDto,
  UpdateAccountBalanceUpdateDto
> {
  constructor() {
    super(ApiEndPoint.ACCOUNT_BALANCE_UPDATES);
  }
}

export const accountBalanceUpdateService = new AccountBalanceUpdateService();
