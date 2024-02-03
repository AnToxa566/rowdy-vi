import {
  ExpenseTransactionsGrid,
  IncomeTransactionsGrid,
  PeriodSelect,
  DateSelect,
  TotalProfit,
} from "./components";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8 px-4 flex flex-col gap-6">
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
