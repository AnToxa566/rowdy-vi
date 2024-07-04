import { TransactionType } from "@/common/enums";

import { BaseCategoriesGrid } from "../base-categories";

const ExpenseCategoriesGrid = () => {
  return <BaseCategoriesGrid type={TransactionType.EXPENSE} />;
};

export { ExpenseCategoriesGrid };
