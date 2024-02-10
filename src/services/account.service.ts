import { ApiBaseService } from "@/services";
import { ApiEndPoint } from "@/common/enums";
import {
  Account,
  CreateAccountDto,
  TransferDto,
  UpdateAccountDto,
} from "@/common/models";

export class AccountService extends ApiBaseService<
  Account,
  CreateAccountDto,
  UpdateAccountDto
> {
  constructor() {
    super(ApiEndPoint.ACCOUNTS);
  }

  async transfer(data: TransferDto): Promise<void> {
    const url = `${this.API_URL}/${this.model}/transfer`;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}

export const accountService = new AccountService();
