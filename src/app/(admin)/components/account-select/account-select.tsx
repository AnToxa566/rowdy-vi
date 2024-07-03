"use client";

import { Key, useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
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

  const handleSelectionChange = (value: Key) => {
    const event = {
      target: {
        name: field.name,
        value: value,
      },
    };

    register(field.name as Path<TFieldValues>).onChange(event);
  };

  const getDefaultKey = () => {
    return typeof defaultSelectedKey === "string"
      ? defaultSelectedKey
      : typeof defaultSelectedKey === "object"
      ? defaultSelectedKey._id
      : field.defaultSelectedKeys?.length
      ? field.defaultSelectedKeys[0]
      : "";
  };

  useEffect(() => {
    fetchAccounts();
    handleSelectionChange(getDefaultKey());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    accounts.length && (
      <Autocomplete
        label={field.label}
        placeholder={field.placeholder}
        labelPlacement={field.labelPlacement}
        isRequired={field.isRequired}
        disabled={field.disabled}
        defaultSelectedKey={getDefaultKey()}
        onSelectionChange={handleSelectionChange}
      >
        {accounts.map((account) => (
          <AutocompleteItem key={account._id} value={account._id}>
            {account.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    )
  );
};
