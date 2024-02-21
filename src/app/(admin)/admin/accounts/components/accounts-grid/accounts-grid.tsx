"use client";

import { useEffect } from "react";

import { accountsActions } from "@/store";
import { accountService } from "@/services";
import { EntitySlug } from "@/common/enums";
import { DataGrid } from "@/app/(admin)/components";
import { accountSchema } from "@/common/form-schemas";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { CreateAccountDto, UpdateAccountDto } from "@/common/models";

export const AccountsGrid = () => {
  const dispatch = useAppDispatch();

  const { accounts, loading } = useAppSelector((state) => state.accounts);

  const handleCreateAccount = async (data: CreateAccountDto) => {
    await accountService.create({
      ...data,
      sum: Number(data.sum),
    });

    dispatch(accountsActions.fetchAccounts());
  };

  const handleUpdateAccount = async (id: string, data: UpdateAccountDto) => {
    await accountService.update(id, {
      ...data,
      sum: Number(data.sum),
    });

    dispatch(accountsActions.fetchAccounts());
  };

  const handleDeleteAccount = async (id: string) => {
    await accountService.delete(id);
    dispatch(accountsActions.fetchAccounts());
  };

  useEffect(() => {
    dispatch(accountsActions.fetchAccounts());
  }, [dispatch]);

  const getTotal = () =>
    accounts.reduce((acc, account) => (acc += account.sum), 0).toFixed(2);

  return (
    <DataGrid
      title="Рахунки"
      loading={loading}
      entitySlug={EntitySlug.ACCOUNT}
      schema={accountSchema}
      data={accounts}
      onCreate={handleCreateAccount}
      onUpdate={handleUpdateAccount}
      onDelete={handleDeleteAccount}
    >
      <p className="font-semibold">
        Загальна сума: <span className="text-success">{getTotal()}&#8372;</span>
      </p>
    </DataGrid>
  );
};
