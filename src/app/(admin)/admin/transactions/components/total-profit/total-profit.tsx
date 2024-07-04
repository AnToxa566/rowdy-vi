"use client";

import { Card, CardBody } from "@nextui-org/react";

import { useAppSelector } from "@/hooks";

const TotalProfit = () => {
  const { totalIncome, totalExpense } = useAppSelector(
    (state) => state.dashboardCounts
  );

  const totalProfit = (): number =>
    parseFloat((totalIncome - totalExpense).toFixed(2));

  return (
    <Card className="p-4">
      <CardBody>
        <p className="text-xl font-semibold">
          Чистий прибуток:{" "}
          <span className={totalProfit() < 0 ? "text-danger" : "text-success"}>
            {totalProfit()}&#8372;
          </span>
        </p>
      </CardBody>
    </Card>
  );
};

export { TotalProfit };
