import { ColumnKey, FormFieldType } from "../enums";
import { ColumnDef } from "../types";
import { formateDate } from "../utils";

export const transactionSchema: ColumnDef[] = [
  {
    type: FormFieldType.NUMBER,
    name: "sum",
    label: "Сума",
    placeholder: "50000",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    type: FormFieldType.ACCOUNT_SELECT,
    name: ColumnKey.ACCOUNT,
    label: "Рахунок",
    placeholder: "Виберіть рахунок",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    type: FormFieldType.CATEGORY_SELECT,
    name: ColumnKey.CATEGORY,
    label: "Категорія",
    placeholder: "Виберіть категорію",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    type: FormFieldType.DATE,
    name: ColumnKey.DATE,
    label: "Дата",
    placeholder: "12.12.2012",
    labelPlacement: "outside",
    defaultValue: formateDate(new Date()),
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Опис",
    type: FormFieldType.TEXTAREA,
    name: "description",
    placeholder: "Додайте деталей до транзакції...",
    labelPlacement: "outside",
    isFormField: true,
    isHidden: true,
  },
];
