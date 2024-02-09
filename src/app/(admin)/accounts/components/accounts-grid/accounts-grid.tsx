"use client";

import { useEffect, useState } from "react";

import { accountService } from "@/services";
import { EntitySlug } from "@/common/enums";
import { DataGrid } from "@/app/(admin)/components";
import { accountSchema } from "@/common/form-schemas";
import { Account, CreateAccountDto, UpdateAccountDto } from "@/common/models";

export const AccountsGrid = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetchAccounts = async () => {
    const { data } = await accountService.findAll();
    setAccounts(data);
  };

  const handleCreateAccount = async (data: CreateAccountDto) => {
    await accountService.create({
      ...data,
      sum: Number(data.sum),
    });

    await fetchAccounts();
  };

  const handleUpdateAccount = async (id: string, data: UpdateAccountDto) => {
    await accountService.update(id, {
      ...data,
      sum: Number(data.sum),
    });

    await fetchAccounts();
  };

  const handleDeleteTransaction = async (id: string) => {
    await accountService.delete(id);
    await fetchAccounts();
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const getTotal = () =>
    accounts.reduce((acc, account) => (acc += account.sum), 0).toFixed(2);

  return (
    <DataGrid
      title="Рахунки"
      entitySlug={EntitySlug.ACCOUNT}
      schema={accountSchema}
      data={accounts}
      onCreate={handleCreateAccount}
      onUpdate={handleUpdateAccount}
      onDelete={handleDeleteTransaction}
    >
      <p className="font-semibold">
        Загальна сума: <span className="text-success">{getTotal()}&#8372;</span>
      </p>
    </DataGrid>
  );
};
