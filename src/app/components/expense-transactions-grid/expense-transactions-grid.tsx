"use client";

import { useCallback, useEffect, useState } from "react";

import { DataGrid } from "@/components";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { transactionService } from "@/services";
import { EntitySlug, TransactionType } from "@/common/enums";
import { expenseTransactionSchema } from "@/common/form-schemas";
import { CreateTransactionDto, Transaction } from "@/common/models";
import { compareDates } from "@/common/utils";
import { dashboardCountsActions } from "@/store";

const ExpenseTransactionsGrid = () => {
  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const { totalExpense } = useAppSelector((state) => state.dashboardCounts);

  const dispatch = useAppDispatch();

  const [expenseTransactions, setExpenseTransactions] = useState<Transaction[]>(
    []
  );

  const uploadTransactions = useCallback(async () => {
    const { data } = await transactionService.findAll({
      type: TransactionType.EXPENSE,
    });
    const expenseTransactions = data.filter((tr) =>
      compareDates(new Date(tr.date), startDate, endDate)
    );

    dispatch(
      dashboardCountsActions.setTotalExpense(
        expenseTransactions.reduce(
          (acc, transaction) => (acc += transaction.sum),
          0
        )
      )
    );

    setExpenseTransactions(
      data.filter((tr) => compareDates(new Date(tr.date), startDate, endDate))
    );
  }, [dispatch, endDate, startDate]);

  const handleCreateTransaction = async (data: CreateTransactionDto) => {
    await transactionService.create({
      ...data,
      sum: Number(data.sum),
    });
    await uploadTransactions();
  };

  const handleDeleteTransaction = async (id: string) => {
    await transactionService.delete(id);
    await uploadTransactions();
  };

  useEffect(() => {
    uploadTransactions();
  }, [uploadTransactions]);

  return (
    <DataGrid
      title="Витрати"
      entitySlug={EntitySlug.EXPENSE_TRANSACTION}
      schema={expenseTransactionSchema}
      data={expenseTransactions}
      onCreate={handleCreateTransaction}
      onDelete={handleDeleteTransaction}
    >
      <p className="font-semibold">
        Загальні витрати:{" "}
        <span className="text-danger">{totalExpense}&#8372;</span>
      </p>
    </DataGrid>
  );
};

export { ExpenseTransactionsGrid };
