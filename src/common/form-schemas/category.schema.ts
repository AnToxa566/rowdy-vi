import { FormFieldType } from "../enums";
import { ColumnDef } from "../types";

export const categorySchema: ColumnDef[] = [
  {
    label: "Назва",
    name: "name",
    type: FormFieldType.TEXT,
    placeholder: "Зарплата",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Пріоритет",
    name: "order",
    type: FormFieldType.NUMBER,
    placeholder: "0",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
];
