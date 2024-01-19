import { ColumnDef } from "../types";
import { FormFieldType, TransactionType } from "../enums";

import { transactionSchema } from ".";

export const expenseTransactionSchema: ColumnDef[] = [
  {
    type: FormFieldType.SELECT,
    name: "type",
    label: "Тип",
    placeholder: "Дохід / витрата",
    labelPlacement: "outside",
    options: [
      { label: "Дохід", value: TransactionType.INCOME },
      { label: "Витрата", value: TransactionType.EXPENSE },
    ],
    defaultSelectedKeys: [TransactionType.EXPENSE],
    isFormField: true,
    isHidden: true,
    isRequired: true,
  },
  ...transactionSchema,
];
