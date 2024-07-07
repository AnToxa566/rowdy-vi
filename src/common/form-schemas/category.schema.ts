import { ColumnKey, FormFieldType } from "../enums";
import { ColumnDef } from "../types";

export const categorySchema: ColumnDef[] = [
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
    placeholder: "Зарплата",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Пріоритет",
    name: "order",
    columnType: ColumnKey.NUMBER,
    formType: FormFieldType.NUMBER,
    placeholder: "0",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
];
