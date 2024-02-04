import { FormFieldType } from "../enums";
import { ColumnDef } from "../types";

export const accountSchema: ColumnDef[] = [
  {
    label: "Назва",
    name: "name",
    type: FormFieldType.TEXT,
    placeholder: "Кеш",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    type: FormFieldType.NUMBER,
    name: "sum",
    label: "Сума",
    placeholder: "Сума на початок",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
];
