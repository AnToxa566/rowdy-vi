import { ColumnKey, FormFieldType } from "../enums";
import { ColumnDef } from "../types";

export const productSchema: ColumnDef[] = [
  {
    label: "Зображення",
    name: "imageSrc",
    columnType: ColumnKey.IMAGE,
    formType: FormFieldType.IMAGE,
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Назва (en)",
    name: "labelEn",
    columnType: ColumnKey.TEXT,
    formType: FormFieldType.TEXT,
    isFormField: true,
    isRequired: true,
    isHidden: true,
  },
  {
    label: "Назва (ru)",
    name: "labelRu",
    columnType: ColumnKey.TEXT,
    formType: FormFieldType.TEXT,
    isFormField: true,
    isRequired: true,
    isHidden: true,
  },
  {
    label: "Назва (uk)",
    name: "labelUk",
    columnType: ColumnKey.TEXT,
    formType: FormFieldType.TEXT,
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Ціна",
    name: "price",
    columnType: ColumnKey.NUMBER,
    formType: FormFieldType.NUMBER,
    isFormField: true,
    isRequired: true,
  },
  {
    label: "Кількість",
    name: "count",
    columnType: ColumnKey.NUMBER,
    formType: FormFieldType.NUMBER,
    isFormField: true,
    isRequired: true,
  },
];
