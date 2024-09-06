import {
  ExpenseTransactionsGrid,
  IncomeTransactionsGrid,
  TotalProfit,
} from "./components";

import { AccountSelector, DateSelect, PeriodSelect } from "../components";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <PeriodSelect />
        <DateSelect />
        <AccountSelector />
      </div>

      <IncomeTransactionsGrid />
      <ExpenseTransactionsGrid />

      <TotalProfit />
    </div>
  );
}
