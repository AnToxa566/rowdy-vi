"use client";

import { useCallback, useEffect, useState } from "react";

import { DataGrid } from "@/app/(admin)/components";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { transactionService } from "@/services";
import { EntitySlug, TransactionType } from "@/common/enums";
import { expenseTransactionSchema } from "@/common/form-schemas";
import {
  CreateTransactionDto,
  Transaction,
  UpdateTransactionDto,
} from "@/common/models";
import { dashboardCountsActions } from "@/store";

const ExpenseTransactionsGrid = () => {
  const dispatch = useAppDispatch();

  const { totalExpense } = useAppSelector((state) => state.dashboardCounts);

  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const [expenseTransactions, setExpenseTransactions] = useState<Transaction[]>(
    []
  );

  const [categoryName, setCategoryName] = useState<string>("");

  const uploadTransactions = useCallback(async () => {
    const { data } = await transactionService.findAll({
      type: TransactionType.EXPENSE,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
    });

    dispatch(
      dashboardCountsActions.setTotalExpense(
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

    setExpenseTransactions(filteredData);
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
      title="Витрати (транзакції)"
      entitySlug={EntitySlug.EXPENSE_TRANSACTION}
      schema={expenseTransactionSchema}
      data={expenseTransactions}
      enableSearch={true}
      onCreate={handleCreateTransaction}
      onUpdate={handleUpdateTransaction}
      onDelete={handleDeleteTransaction}
      onSearch={handleSearch}
    >
      <p className="font-semibold">
        Загальні витрати:{" "}
        <span className="text-danger">{totalExpense}&#8372;</span>
      </p>
    </DataGrid>
  );
};

export { ExpenseTransactionsGrid };
