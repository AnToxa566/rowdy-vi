import { ColumnKey } from "../enums";
import { ColumnDef } from "../types";

export const totalCategoriesSchema: ColumnDef[] = [
  {
    label: "",
    name: "color",
    columnType: ColumnKey.COLOR,
  },
  {
    label: "Назва",
    name: "name",
    columnType: ColumnKey.TEXT,
  },
  {
    label: "Сума",
    name: "sum",
    columnType: ColumnKey.NUMBER,
  },
  {
    label: "Відсоток",
    name: "percent",
    columnType: ColumnKey.PERCENT,
  },
];
