"use client";

import { useCallback, useEffect, useState } from "react";

import { ButtonGroup, Button, Card, CardBody } from "@nextui-org/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { DataGrid } from "@/components";
import { transactionService } from "@/services";
import { EntitySlug, TransactionType } from "@/common/enums";
import { CreateTransactionDto, Transaction } from "@/common/models";
import {
  incomeTransactionSchema,
  expenseTransactionSchema,
} from "@/common/form-schemas";

enum DashboardState {
  DAIYLY,
  WEEKLY,
  MONTHLY,
  ANNUAL,
}

export default function Home() {
  const [dashboardState, setDashboardState] = useState(DashboardState.DAIYLY);

  const [dashboardDate, setDashboardDate] = useState(new Date());

  const [incomeTransactions, setIncomeTransactions] = useState<Transaction[]>(
    []
  );

  const [expenseTransactions, setExpenseTransactions] = useState<Transaction[]>(
    []
  );

  const fetchTransactions = useCallback(
    (type: TransactionType): Transaction[] => {
      return transactionService
        .findAll({ type })
        .filter((tr) => compareDates(new Date(tr.date), dashboardDate));
    },
    [dashboardDate]
  );

  const uploadTransactions = useCallback(() => {
    setIncomeTransactions(fetchTransactions(TransactionType.INCOME));
    setExpenseTransactions(fetchTransactions(TransactionType.EXPENSE));
  }, [fetchTransactions]);

  useEffect(() => {
    uploadTransactions();
  }, [uploadTransactions]);

  const compareDates = (firstDate: Date, secondDate: Date): boolean => {
    return firstDate.setHours(0, 0, 0, 0) === secondDate.setHours(0, 0, 0, 0);
  };

  const totalIncome = (): number =>
    incomeTransactions.reduce(
      (acc, transaction) => (acc += transaction.sum),
      0
    );

  const totalExpense = (): number =>
    expenseTransactions.reduce(
      (acc, transaction) => (acc += transaction.sum),
      0
    );

  const totalProfit = (): number => totalIncome() - totalExpense();

  const handleCreateTranslation = (data: CreateTransactionDto) => {
    transactionService.create({
      ...data,
      sum: Number(data.sum),
    });
    uploadTransactions();
  };

  const handleDeleteTransaction = (id: string) => {
    transactionService.delete(id);
    uploadTransactions();
  };

  const handlePrevDate = () => {
    const newDate = dashboardDate.setDate(dashboardDate.getDate() - 1);
    setDashboardDate(new Date(newDate));
  };

  const handleNextDate = () => {
    const newDate = dashboardDate.setDate(dashboardDate.getDate() + 1);
    setDashboardDate(new Date(newDate));
  };

  return (
    <main className="container mx-auto py-8 px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-4xl font-bold">Rowdy Dashboard</h1>

        <ButtonGroup>
          <Button
            color={
              dashboardState === DashboardState.DAIYLY ? "danger" : "default"
            }
            onPress={() => setDashboardState(DashboardState.DAIYLY)}
          >
            За день
          </Button>

          <Button
            color={
              dashboardState === DashboardState.WEEKLY ? "danger" : "default"
            }
            onPress={() => setDashboardState(DashboardState.WEEKLY)}
          >
            За неділю
          </Button>

          <Button
            color={
              dashboardState === DashboardState.MONTHLY ? "danger" : "default"
            }
            onPress={() => setDashboardState(DashboardState.MONTHLY)}
          >
            За місяць
          </Button>

          <Button
            color={
              dashboardState === DashboardState.ANNUAL ? "danger" : "default"
            }
            onPress={() => setDashboardState(DashboardState.ANNUAL)}
          >
            За рік
          </Button>
        </ButtonGroup>

        <div className="flex justify-center items-center gap-2">
          <RiArrowDropLeftLine
            className="cursor-pointer"
            onClick={handlePrevDate}
          />

          <span className="font-semibold">
            {dashboardDate.toLocaleDateString("uk")}
          </span>

          <RiArrowDropRightLine
            className="cursor-pointer"
            onClick={handleNextDate}
          />
        </div>
      </div>

      <DataGrid
        title="Доходи"
        entitySlug={EntitySlug.INCOME_TRANSACTION}
        schema={incomeTransactionSchema}
        data={incomeTransactions}
        onCreate={handleCreateTranslation}
        onDelete={handleDeleteTransaction}
      >
        <p className="font-semibold">
          Загальний дохід:{" "}
          <span className="text-success">{totalIncome()}&#8372;</span>
        </p>
      </DataGrid>

      <DataGrid
        title="Витрати"
        entitySlug={EntitySlug.EXPENSE_TRANSACTION}
        schema={expenseTransactionSchema}
        data={expenseTransactions}
        onCreate={handleCreateTranslation}
        onDelete={handleDeleteTransaction}
      >
        <p className="font-semibold">
          Загальні витрати:{" "}
          <span className="text-danger">{totalExpense()}&#8372;</span>
        </p>
      </DataGrid>

      <Card className="p-4">
        <CardBody>
          <p className="text-xl font-semibold">
            Чистий прибуток:{" "}
            <span
              className={totalProfit() < 0 ? "text-danger" : "text-success"}
            >
              {totalProfit()}&#8372;
            </span>
          </p>
        </CardBody>
      </Card>
    </main>
  );
}
