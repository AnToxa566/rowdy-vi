import { ColumnKey, FormFieldType } from "../enums";
import { formateDate } from "../utils";
import { ColumnDef } from "../types";

export const transactionSchema: ColumnDef[] = [
  {
    columnType: ColumnKey.SUM,
    formType: FormFieldType.NUMBER,
    name: "sum",
    label: "Сума",
    placeholder: "50000",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    columnType: ColumnKey.ACCOUNT,
    formType: FormFieldType.ACCOUNT_SELECT,
    name: "account",
    label: "Рахунок",
    placeholder: "Виберіть рахунок",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    columnType: ColumnKey.CATEGORY,
    formType: FormFieldType.CATEGORY_SELECT,
    name: "category",
    label: "Категорія",
    placeholder: "Виберіть категорію",
    labelPlacement: "outside",
    isFormField: true,
    isRequired: true,
  },
  {
    columnType: ColumnKey.DATE,
    formType: FormFieldType.DATE,
    name: "date",
    label: "Дата",
    placeholder: "12.12.2012",
    labelPlacement: "outside",
    defaultValue: formateDate(new Date()),
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Опис",
    formType: FormFieldType.TEXTAREA,
    name: "description",
    placeholder: "Додайте деталей до транзакції...",
    labelPlacement: "outside",
    isFormField: true,
    isHidden: true,
  },
];
