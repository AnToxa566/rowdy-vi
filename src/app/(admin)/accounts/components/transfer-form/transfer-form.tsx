"use client";

import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";

import { Account, TransferDto } from "@/common/models";
import { accountService } from "@/services";

interface TransferFormProps {
  onTransfer?: (data: TransferDto) => void;
  onCancel?: () => void;
}

export interface Inputs {
  from: string;
  to: string;
  sum: string;
}

export const TransferForm: FC<TransferFormProps> = ({
  onTransfer = () => {},
  onCancel = () => {},
}) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      ...data,
      sum: Number(data.sum),
    };

    await accountService.transfer(payload);
    onTransfer(payload);
  };

  const fetchAccounts = async () => {
    const { data } = await accountService.findAll();
    setAccounts(data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-bold text-xl">Перевод грошей</h3>

      <Select
        label="З рахунку"
        placeholder="Виберіть рахунок"
        labelPlacement="outside"
        isRequired={true}
        {...register("from")}
      >
        {accounts.map((account) => (
          <SelectItem key={account._id} value={account._id}>
            {`${account.name}`}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="На рахунок"
        placeholder="Виберіть рахунок"
        labelPlacement="outside"
        isRequired={true}
        {...register("to")}
      >
        {accounts.map((account) => (
          <SelectItem key={account._id} value={account._id}>
            {`${account.name}`}
          </SelectItem>
        ))}
      </Select>

      <Input
        type="number"
        label="Cума"
        placeholder="Введіть суму"
        labelPlacement="outside"
        isRequired={true}
        {...register("sum")}
      />

      <div className="flex items-center justify-end gap-2">
        <Button color="danger" variant="light" onClick={onCancel}>
          Відміна
        </Button>

        <Button type="submit" color="primary">
          Перевести
        </Button>
      </div>
    </form>
  );
};
