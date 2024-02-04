import { ApiBaseService } from "@/services";
import { Account, CreateAccountDto, UpdateAccountDto } from "@/common/models";
import { ApiEndPoint } from "@/common/enums";

export class AccountService extends ApiBaseService<
  Account,
  CreateAccountDto,
  UpdateAccountDto
> {
  constructor() {
    super(ApiEndPoint.ACCOUNTS);
  }
}

export const accountService = new AccountService();
