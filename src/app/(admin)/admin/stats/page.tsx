import { ExpenseCategoriesGrid, IncomeCategoriesGrid } from "./components";

import { DateSelect, PeriodSelect } from "../../components";

export default function StatsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <PeriodSelect />
        <DateSelect />
      </div>

      <IncomeCategoriesGrid />
      <ExpenseCategoriesGrid />
    </div>
  );
}
