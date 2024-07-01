"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

import { ColumnDef } from "@/common/types";
import { formateDate } from "@/common/utils";
import { FormFieldType } from "@/common/enums";

import { AccountSelect, CategorySelect } from "..";

export interface InputsTemplate {
  [key: string]: string;
}

export interface EntityFormProps<T> {
  schema: ColumnDef[];
  entitySlug: string;
  item?: T;
  updateState?: boolean;
  onCancel?: () => void;
  onSave?: (data: InputsTemplate) => void;
}

export function EntityForm<T>({
  schema,
  entitySlug,
  item,
  updateState = false,
  onCancel = () => {},
  onSave = () => {},
}: EntityFormProps<T>) {
  const inputsTemplate: InputsTemplate = {};

  schema.forEach((field) => {
    inputsTemplate[field.name] = "";
  });

  type Inputs = typeof inputsTemplate;

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => onSave(data);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h3 className="font-bold text-xl">
          {updateState ? "Обновити" : "Додати"} сутність {entitySlug}
        </h3>
      </header>

      <main className="flex flex-col gap-3">
        {schema.map((field) => {
          if (field.isFormField) {
            if (field.type === FormFieldType.TEXTAREA) {
              return (
                <Textarea
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  labelPlacement={field.labelPlacement}
                  isRequired={field.isRequired}
                  disabled={field.disabled}
                  defaultValue={
                    item ? item[field.name as keyof T] : field.defaultValue
                  }
                  {...register(field.name)}
                />
              );
            } else if (
              field.type === FormFieldType.SELECT &&
              field.options &&
              field.options.length
            ) {
              return (
                <Select
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  labelPlacement={field.labelPlacement}
                  isRequired={field.isRequired}
                  disabled={field.disabled}
                  defaultSelectedKeys={
                    item
                      ? [item[field.name as keyof T] as string | number]
                      : field.defaultSelectedKeys
                  }
                  {...register(field.name)}
                >
                  {field.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              );
            } else if (field.type === FormFieldType.ACCOUNT_SELECT) {
              return (
                <AccountSelect
                  key={field.name}
                  field={field}
                  defaultSelectedKey={
                    item ? (item[field.name as keyof T] as string) : ""
                  }
                  register={register}
                />
              );
            } else if (field.type === FormFieldType.CATEGORY_SELECT) {
              return (
                <CategorySelect
                  key={field.name}
                  field={field}
                  defaultSelectedKey={
                    item ? (item[field.name as keyof T] as string) : ""
                  }
                  register={register}
                />
              );
            } else if (field.type === FormFieldType.DATE) {
              return (
                <Input
                  key={field.name}
                  type={field.type}
                  label={field.label}
                  placeholder={field.placeholder}
                  labelPlacement={field.labelPlacement}
                  defaultValue={formateDate(
                    new Date(
                      item ? item[field.name as keyof T] : field.defaultValue
                    )
                  )}
                  isRequired={field.isRequired}
                  disabled={field.disabled}
                  {...register(field.name)}
                />
              );
            } else {
              return (
                <Input
                  key={field.name}
                  type={field.type}
                  label={field.label}
                  placeholder={field.placeholder}
                  labelPlacement={field.labelPlacement}
                  defaultValue={
                    item ? item[field.name as keyof T] : field.defaultValue
                  }
                  isRequired={field.isRequired}
                  disabled={field.disabled}
                  {...register(field.name)}
                />
              );
            }
          }
        })}
      </main>

      <footer className="flex items-center justify-end gap-2">
        <Button color="danger" variant="light" onClick={onCancel}>
          Відміна
        </Button>

        <Button type="submit" color="primary">
          Зберегти
        </Button>
      </footer>
    </form>
  );
}
