import { Key } from "react";

import { FormFieldType } from "../enums";

export interface ColumnDef {
  name: string;
  label: string;
  isHidden?: boolean;
  type?: FormFieldType;
  isFormField?: boolean;
  placeholder?: string;
  labelPlacement?: "inside" | "outside" | "outside-left";
  options?: FormSelectOption[];
  isRequired?: boolean;
  disabled?: boolean;
  defaultValue?: any;
  defaultSelectedKeys?: (string | number)[];
}

export interface FormSelectOption {
  label: string;
  value: string | number;
}
