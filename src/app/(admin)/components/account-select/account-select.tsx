"use client";

import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

import { ColumnDef } from "@/common/types";
import { accountService } from "@/services";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Account } from "@/common/models";

interface AccountSelectProps<TFieldValues extends FieldValues> {
  field: ColumnDef;
  register: UseFormRegister<TFieldValues>;
}

export const AccountSelect = <TFieldValues extends FieldValues>({
  field,
  register,
}: AccountSelectProps<TFieldValues>) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetchAccounts = async () => {
    const { data } = await accountService.findAll();
    setAccounts(data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <Select
      label={field.label}
      placeholder={field.placeholder}
      labelPlacement={field.labelPlacement}
      isRequired={field.isRequired}
      disabled={field.disabled}
      defaultSelectedKeys={field.defaultSelectedKeys}
      {...register(field.name as Path<TFieldValues>)}
    >
      {accounts.map((account) => (
        <SelectItem key={account._id} value={account._id}>
          {account.name}
        </SelectItem>
      ))}
    </Select>
  );
};
