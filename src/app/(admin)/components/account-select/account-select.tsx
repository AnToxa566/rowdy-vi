"use client";

import { useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { ColumnDef } from "@/common/types";
import { accountsActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks";

interface AccountSelectProps<TFieldValues extends FieldValues> {
  field: ColumnDef;
  defaultSelectedKey?: string;
  register: UseFormRegister<TFieldValues>;
}

export const AccountSelect = <TFieldValues extends FieldValues>({
  field,
  register,
  defaultSelectedKey = "",
}: AccountSelectProps<TFieldValues>) => {
  const dispatch = useAppDispatch();

  const { accounts, loading } = useAppSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(accountsActions.fetchAccounts());
  }, [dispatch]);

  return (
    accounts.length && (
      <Select
        label={field.label}
        placeholder={field.placeholder}
        labelPlacement={field.labelPlacement}
        isRequired={field.isRequired}
        disabled={field.disabled}
        isLoading={loading}
        defaultSelectedKeys={
          defaultSelectedKey ? [defaultSelectedKey] : field.defaultSelectedKeys
        }
        {...register(field.name as Path<TFieldValues>)}
      >
        {accounts.map((account) => (
          <SelectItem key={account._id} value={account._id}>
            {account.name}
          </SelectItem>
        ))}
      </Select>
    )
  );
};
