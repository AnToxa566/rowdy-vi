"use client";

import { FC, useCallback, useEffect, useState } from "react";

import { BaseModel } from "@/common/models";
import { transactionService } from "@/services";
import { TransactionType } from "@/common/enums";
import { dashboardCountsActions } from "@/store";
import { DataGrid } from "@/app/(admin)/components";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { totalCategoriesSchema } from "@/common/form-schemas";

export interface BaseCategoriesGridProps {
  type: TransactionType;
}

export interface CategoryTotalData extends BaseModel {
  name: string;
  percent: string;
  sum: number;
}

const BaseCategoriesGrid: FC<BaseCategoriesGridProps> = ({ type }) => {
  const undefinedCategory = "Не встановлено";

  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const { totalIncome, totalExpense } = useAppSelector(
    (state) => state.dashboardCounts
  );

  const dispatch = useAppDispatch();

  const [categoriesTotalData, setCategoriesTotalData] = useState<
    CategoryTotalData[]
  >([]);

  const uploadTransactions = useCallback(async () => {
    const { data } = await transactionService.findAll({
      type: type,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
    });

    const totalSum: number = parseFloat(
      data.reduce((acc, transaction) => (acc += transaction.sum), 0).toFixed(2)
    );

    dispatch(
      type === TransactionType.INCOME
        ? dashboardCountsActions.setTotalIncome(totalSum)
        : dashboardCountsActions.setTotalExpense(totalSum)
    );

    const categorySums: { [key: string]: number } = {};

    data.forEach((transaction) => {
      if (!categorySums[transaction.category?.name || undefinedCategory]) {
        categorySums[transaction.category?.name || undefinedCategory] = 0;
      }
      categorySums[transaction.category?.name || undefinedCategory] +=
        transaction.sum;
    });

    const categories: CategoryTotalData[] = Object.keys(categorySums).map(
      (category) => {
        const sum = categorySums[category];

        return {
          _id: category,
          name: category,
          percent: ((sum / totalSum) * 100).toFixed(2) + "%",
          sum: parseFloat(sum.toFixed(2)),
        };
      }
    );

    const sortedCategories = categories.sort((a, b) => b.sum - a.sum);

    setCategoriesTotalData(sortedCategories);
  }, [dispatch, endDate, startDate, type]);

  useEffect(() => {
    uploadTransactions();
  }, [uploadTransactions]);

  return (
    <DataGrid
      title={type === TransactionType.INCOME ? "Доходи" : "Витрати"}
      entitySlug=""
      enableActios={false}
      enableAdd={false}
      schema={totalCategoriesSchema}
      data={categoriesTotalData}
    >
      <p className="font-semibold">
        Сума:{" "}
        <span
          className={
            type === TransactionType.INCOME ? "text-success" : "text-danger"
          }
        >
          {type === TransactionType.INCOME ? totalIncome : totalExpense}&#8372;
        </span>
      </p>
    </DataGrid>
  );
};

export { BaseCategoriesGrid };
