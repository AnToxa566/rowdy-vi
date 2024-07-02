"use client";

import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { ColumnDef } from "@/common/types";
import { accountService } from "@/services";
import { Account, BaseModel } from "@/common/models";

interface AccountSelectProps<TFieldValues extends FieldValues> {
  field: ColumnDef;
  defaultSelectedKey?: string | BaseModel;
  register: UseFormRegister<TFieldValues>;
}

export const AccountSelect = <TFieldValues extends FieldValues>({
  field,
  register,
  defaultSelectedKey = "",
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
    accounts.length && (
      <Select
        label={field.label}
        placeholder={field.placeholder}
        labelPlacement={field.labelPlacement}
        isRequired={field.isRequired}
        disabled={field.disabled}
        defaultSelectedKeys={
          typeof defaultSelectedKey === 'string' ? 
            [defaultSelectedKey] :
          typeof defaultSelectedKey === 'object' ? 
            [defaultSelectedKey._id] :
          field.defaultSelectedKeys
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
