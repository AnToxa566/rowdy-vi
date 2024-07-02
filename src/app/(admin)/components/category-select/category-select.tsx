"use client";

import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { ColumnDef } from "@/common/types";
import { categoryService } from "@/services";
import { BaseModel, Category } from "@/common/models";

interface CategorySelectProps<TFieldValues extends FieldValues> {
  field: ColumnDef;
  defaultSelectedKey?: string | BaseModel;
  register: UseFormRegister<TFieldValues>;
}

export const CategorySelect = <TFieldValues extends FieldValues>({
  field,
  register,
  defaultSelectedKey = "",
}: CategorySelectProps<TFieldValues>) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const { data } = await categoryService.findAll();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    categories.length && (
      <Select
        label={field.label}
        placeholder={field.placeholder}
        labelPlacement={field.labelPlacement}
        isRequired={field.isRequired}
        disabled={field.disabled}
        defaultSelectedKeys={
          typeof defaultSelectedKey === 'string' ? 
            [defaultSelectedKey] :
          typeof defaultSelectedKey === 'object' ? 
            [defaultSelectedKey._id] :
          field.defaultSelectedKeys
        }
        {...register(field.name as Path<TFieldValues>)}
      >
        {categories.map((Category) => (
          <SelectItem key={Category._id} value={Category._id}>
            {Category.name}
          </SelectItem>
        ))}
      </Select>
    )
  );
};
