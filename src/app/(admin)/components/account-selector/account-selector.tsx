"use client";

import { Key, useEffect, useState } from "react";

import { accountService } from "@/services";
import { dashboardAccountActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

interface AccountSelectorItem {
  _id: string;
  name: string;
}

const AccountSelector = () => {
  const dispatch = useAppDispatch();

  const { account } = useAppSelector((state) => state.dashboardAccount);

  const [accounts, setAccounts] = useState<AccountSelectorItem[]>([]);

  const fetchAccounts = async () => {
    const { data: accounts } = await accountService.findAll();
    const data: AccountSelectorItem[] = accounts.map((account) => ({
      _id: account._id,
      name: account.name,
    }));

    data.unshift({ _id: "all", name: "Всі" });

    setAccounts(data);
  };

  const handleSelectionChange = (key: Key) => {
    dispatch(dashboardAccountActions.setAccount(key as string));
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    accounts.length && (
      <Autocomplete
        label="Рахунок"
        defaultSelectedKey={account}
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

export { AccountSelector };
