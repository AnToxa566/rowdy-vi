import {
  ExpenseTransactionsGrid,
  IncomeTransactionsGrid,
  PeriodSelect,
  DateSelect,
  TotalProfit,
} from "./components";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <PeriodSelect />
        <DateSelect />
      </div>

      <IncomeTransactionsGrid />
      <ExpenseTransactionsGrid />

      <TotalProfit />
    </div>
  );
}
