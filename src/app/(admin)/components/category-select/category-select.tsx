"use client";

import { Key, useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
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

  const handleSelectionChange = (value: Key) => {
    const event = {
      target: {
        name: field.name,
        value: value,
      },
    };

    register(field.name as Path<TFieldValues>).onChange(event);
  };

  const getDefaultKey = () => {
    return typeof defaultSelectedKey === "string"
      ? defaultSelectedKey
      : typeof defaultSelectedKey === "object"
      ? defaultSelectedKey._id
      : field.defaultSelectedKeys?.length
      ? field.defaultSelectedKeys[0]
      : "";
  };

  useEffect(() => {
    fetchCategories();
    handleSelectionChange(getDefaultKey());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    categories.length && (
      <Autocomplete
        label={field.label}
        placeholder={field.placeholder}
        labelPlacement={field.labelPlacement}
        isRequired={field.isRequired}
        disabled={field.disabled}
        defaultSelectedKey={getDefaultKey()}
        onSelectionChange={handleSelectionChange}
      >
        {categories.map((Category) => (
          <AutocompleteItem key={Category._id} value={Category._id}>
            {Category.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    )
  );
};
