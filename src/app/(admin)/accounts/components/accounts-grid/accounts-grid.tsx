"use client";

import { useEffect, useState } from "react";

import { accountService } from "@/services";
import { EntitySlug } from "@/common/enums";
import { DataGrid } from "@/app/(admin)/components";
import { accountSchema } from "@/common/form-schemas";
import { Account, CreateAccountDto } from "@/common/models";

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

  const handleDeleteTransaction = async (id: string) => {
    await accountService.delete(id);
    await fetchAccounts();
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <DataGrid
      title="Рахунки"
      entitySlug={EntitySlug.ACCOUNT}
      schema={accountSchema}
      data={accounts}
      onCreate={handleCreateAccount}
      onDelete={handleDeleteTransaction}
    ></DataGrid>
  );
};
