"use client";

import { useCallback, useEffect, useState } from "react";

import { DataGrid } from "@/app/(admin)/components";

import { accountTransferService, accountService } from "@/services";

import { EntitySlug } from "@/common/enums";
import { AccountTransfer, Account } from "@/common/models";
import { accountTransferSchema } from "@/common/form-schemas";

interface EnhancedAccountTransfer extends Omit<AccountTransfer, 'fromId' | 'toId'> {
  toId: Account;
  fromId: Account;
}

const AccountTransfersList = () => {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [accountTransfers, setAccountTransfers] = useState<AccountTransfer[]>([]);
  const [enhancedTransfers, setEnhancedTransfers] = useState<EnhancedAccountTransfer[]>([]);

  const uploadTransfers = useCallback(async () => {
    setLoading(true);

    try {
      const [accountsResponse, transfersResponse] = await Promise.all([
        accountService.findAll(),
        accountTransferService.findAll({ pageSize: "50" }),
      ]);
      
      setAccounts(accountsResponse.data);
      setAccountTransfers(transfersResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (accountTransfers.length > 0 && accounts.length > 0) {
      const enhanced = accountTransfers
        .map((transfer) => {
          const toAccount = accounts.find((acc) => acc._id === transfer.toId);
          const fromAccount = accounts.find((acc) => acc._id === transfer.fromId);
          
          if (!fromAccount || !toAccount) {
            return null;
          }
          
          return {
            ...transfer,
            toId: toAccount,
            fromId: fromAccount,
          };
        })
        .filter((transfer): transfer is EnhancedAccountTransfer => transfer !== null);
      
      setEnhancedTransfers(enhanced);
    }
  }, [accountTransfers, accounts]);

  useEffect(() => {
    uploadTransfers();
  }, [uploadTransfers]);

  return (
    <DataGrid
      title="Перекази між рахунками"
      entitySlug={EntitySlug.ACCOUNT_TRANSFER}
      schema={accountTransferSchema}
      data={enhancedTransfers}
      loading={loading}
      enableActions={false}
      enableAdd={false}
      enableSearch={false}
      enableUpdate={false}
      enableDelete={false}
    ></DataGrid>
  );
};

export { AccountTransfersList };
