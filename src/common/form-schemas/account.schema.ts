import { ColumnKey, FormFieldType } from "../enums";
import { ColumnDef } from "../types";

export const accountSchema: ColumnDef[] = [
  {
    label: "Колір",
    name: "color",
    columnType: ColumnKey.COLOR,
    formType: FormFieldType.COLOR,
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Назва",
    name: "name",
    columnType: ColumnKey.TEXT,
    formType: FormFieldType.TEXT,
    placeholder: "Кеш",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    columnType: ColumnKey.SUM,
    formType: FormFieldType.NUMBER,
    name: "sum",
    label: "Сума",
    placeholder: "Сума на початок",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Враховувати",
    name: "countable",
    columnType: ColumnKey.BOOLEAN,
    formType: FormFieldType.BOOLEAN,
    isFormField: true,
    isRequired: true,
    defaultValue: true,
  },
];
