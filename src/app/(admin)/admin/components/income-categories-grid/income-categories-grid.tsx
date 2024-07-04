import { TransactionType } from "@/common/enums";

import { BaseCategoriesGrid } from "../base-categories";

const IncomeCategoriesGrid = () => {
  return <BaseCategoriesGrid type={TransactionType.INCOME} />;
};

export { IncomeCategoriesGrid };
