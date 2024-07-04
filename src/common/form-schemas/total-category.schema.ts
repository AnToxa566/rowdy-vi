import { ColumnKey } from "../enums";
import { ColumnDef } from "../types";

export const totalCategoriesSchema: ColumnDef[] = [
  {
    label: "Назва",
    name: "name",
  },
  {
    label: "Сума",
    name: ColumnKey.SUM,
  },
  {
    label: "Відсоток",
    name: "percent",
  },
];
