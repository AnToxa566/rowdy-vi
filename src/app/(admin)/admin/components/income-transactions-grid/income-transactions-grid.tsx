"use client";

import { useCallback, useEffect, useState } from "react";

import { DataGrid } from "@/app/(admin)/components";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { transactionService } from "@/services";
import { EntitySlug, TransactionType } from "@/common/enums";
import { incomeTransactionSchema } from "@/common/form-schemas";
import {
  CreateTransactionDto,
  Transaction,
  UpdateTransactionDto,
} from "@/common/models";
import { dashboardCountsActions } from "@/store";

const IncomeTransactionsGrid = () => {
  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const { totalIncome } = useAppSelector((state) => state.dashboardCounts);

  const dispatch = useAppDispatch();

  const [incomeTransactions, setIncomeTransactions] = useState<Transaction[]>(
    []
  );

  const [categoryName, setCategoryName] = useState<string>("");

  const uploadTransactions = useCallback(async () => {
    const { data } = await transactionService.findAll({
      type: TransactionType.INCOME,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
    });

    dispatch(
      dashboardCountsActions.setTotalIncome(
        parseFloat(
          data
            .reduce((acc, transaction) => (acc += transaction.sum), 0)
            .toFixed(2)
        )
      )
    );

    const filteredData = data.filter((item) =>
      categoryName
        ? item.category?.name.toLowerCase().includes(categoryName.toLowerCase())
        : true
    );

    setIncomeTransactions(filteredData);
  }, [dispatch, endDate, startDate, categoryName]);

  const handleCreateTransaction = async (data: CreateTransactionDto) => {
    await transactionService.create({
      ...data,
      sum: Number(data.sum),
    });
    await uploadTransactions();
  };

  const handleUpdateTransaction = async (
    id: string,
    data: UpdateTransactionDto
  ) => {
    await transactionService.update(id, {
      ...data,
      sum: Number(data.sum),
    });
    await uploadTransactions();
  };

  const handleDeleteTransaction = async (id: string) => {
    await transactionService.delete(id);
    await uploadTransactions();
  };

  const handleSearch = async (query: string) => {
    setCategoryName(query);
    uploadTransactions();
  };

  useEffect(() => {
    uploadTransactions();
  }, [uploadTransactions]);

  return (
    <DataGrid
      title="Доходи (транзакції)"
      entitySlug={EntitySlug.INCOME_TRANSACTION}
      schema={incomeTransactionSchema}
      data={incomeTransactions}
      enableSearch={true}
      onCreate={handleCreateTransaction}
      onUpdate={handleUpdateTransaction}
      onDelete={handleDeleteTransaction}
      onSearch={handleSearch}
    >
      <p className="font-semibold">
        Загальний дохід:{" "}
        <span className="text-success">{totalIncome}&#8372;</span>
      </p>
    </DataGrid>
  );
};

export { IncomeTransactionsGrid };
