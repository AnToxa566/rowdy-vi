import { ColumnKey } from "../enums";
import { ColumnDef } from "../types";

export const accountBalanceUpdateSchema: ColumnDef[] = [
  {
    label: "Рахунок",
    name: "accountId",
    columnType: ColumnKey.ACCOUNT,
    isFormField: false,
  },
  {
    label: "Стара сума",
    name: "oldSum",
    columnType: ColumnKey.SUM,
    isFormField: false,
  },
  {
    label: "Нова сума",
    name: "newSum",
    columnType: ColumnKey.SUM,
    isFormField: false,
  },
  {
    label: "Різниця",
    name: "difference",
    columnType: ColumnKey.SUM,
    isFormField: false,
  },
  {
    label: "Дата створення",
    name: "createdAt",
    columnType: ColumnKey.DATE_TIME,
    isFormField: false,
  },
];
