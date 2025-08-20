"use client";

import { useCallback, useEffect, useState, useMemo } from "react";

import { AccountBalanceUpdateType, EntitySlug } from "@/common/enums";
import { DataGrid } from "@/app/(admin)/components";
import { Account, AccountBalanceUpdate } from "@/common/models";
import { accountBalanceUpdateSchema } from "@/common/form-schemas";
import { accountBalanceUpdateService, accountService } from "@/services";

interface EnhancedAccountBalance extends Omit<AccountBalanceUpdate, 'accountId' | 'difference' | 'type'> {
  type: string;
  accountId: Account;
  difference: number;
}

export const AccountBalanceUpdatesGrid = () => {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [accountUpdates, setAccountUpdates] = useState<AccountBalanceUpdate[]>([]);
  const [enhancedUpdates, setEnhancedUpdates] = useState<EnhancedAccountBalance[]>([]);

  const typeLablelMap = useMemo(() => new Map<AccountBalanceUpdateType | undefined, string>([
    [AccountBalanceUpdateType.TransactionCreated, "Транзакція створена"],
    [AccountBalanceUpdateType.TransactionUpdated, "Транзакція оновлена"],
    [AccountBalanceUpdateType.TransactionDeleted, "Транзакція видалена"],
    [AccountBalanceUpdateType.ManualUpdate, "Ручна зміна"],
    [undefined, "Не визначено"],
  ]), []);

  const uploadUpdates = useCallback(async () => {
    setLoading(true);

    try {
      const [accountsResponse, updatesResponse] = await Promise.all([
        accountService.findAll(),
        accountBalanceUpdateService.findAll({ pageSize: "50" }),
      ]);
      
      setAccounts(accountsResponse.data);
      setAccountUpdates(updatesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (accountUpdates.length > 0 && accounts.length > 0) {
      const enhanced = accountUpdates
        .map((update) => {
          const account = accounts.find((acc) => acc._id === update.accountId);
          
          if (!account) {
            return null;
          }
          
          return {
            ...update,
            accountId: account,
            type: typeLablelMap.get(update.type),
            difference: update.newSum - update.oldSum,
          };
        })
        .filter((update): update is EnhancedAccountBalance => update !== null);
      
      setEnhancedUpdates(enhanced);
    }
  }, [accountUpdates, accounts, typeLablelMap]);

  useEffect(() => {
    uploadUpdates();
  }, [uploadUpdates]);

  return (
    <DataGrid
      title="Оновлення балансу рахунків"
      loading={loading}
      enableAdd={false}
      enableUpdate={false}
      enableDelete={false}
      enableActions={false}
      data={enhancedUpdates}
      schema={accountBalanceUpdateSchema}
      entitySlug={EntitySlug.ACCOUNT_BALANCE_UPDATE}
    ></DataGrid>
  );
};
