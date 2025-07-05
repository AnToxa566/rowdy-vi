"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Button,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@nextui-org/react";

import { ColumnDef } from "@/common/types";
import { formateDate } from "@/common/utils";
import { FormFieldType } from "@/common/enums";

import { AccountSelect, CategorySelect, ColorPicker, ImageUploader } from "..";

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
  const [loading, setLoading] = useState<boolean>(false);

  const inputsTemplate: InputsTemplate = {};

  schema.forEach((field) => {
    inputsTemplate[field.name] = "";
  });

  type Inputs = typeof inputsTemplate;

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => onSave(data);

  const onSwitched = (fieldName: string, value: boolean) => {
    const event = {
      target: {
        name: fieldName,
        value: value,
      },
    };

    register(fieldName).onChange(event);
  };

  const onImageUploadingChange = (isUploading: boolean) => {
    setLoading(isUploading);
  };

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
            if (field.formType === FormFieldType.TEXTAREA) {
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
              field.formType === FormFieldType.SELECT &&
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
            } else if (field.formType === FormFieldType.ACCOUNT_SELECT) {
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
            } else if (field.formType === FormFieldType.CATEGORY_SELECT) {
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
            } else if (field.formType === FormFieldType.DATE) {
              return (
                <Input
                  key={field.name}
                  type={field.formType}
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
            } else if (field.formType === FormFieldType.COLOR) {
              return (
                <ColorPicker
                  key={field.name}
                  field={field}
                  register={register}
                  label={field.label}
                  isRequired={field.isRequired}
                  defaultSelectedColor={
                    item ? item[field.name as keyof T] : field.defaultValue
                  }
                />
              );
            } else if (field.formType === FormFieldType.BOOLEAN) {
              return (
                <Switch
                  key={field.name}
                  color="danger"
                  defaultSelected={
                    item ? item[field.name as keyof T] : field.defaultValue
                  }
                  required={field.isRequired}
                  isDisabled={field.disabled}
                  onValueChange={(isSelected) =>
                    onSwitched(field.name, isSelected)
                  }
                >
                  {field.label}
                </Switch>
              );
            } else if (field.formType === FormFieldType.IMAGE) {
              return (
                <ImageUploader
                  key={field.name}
                  field={field}
                  register={register}
                  defaultValue={
                    item ? (item[field.name as keyof T] as string) : field.defaultValue
                  }
                  onUploadingChange={onImageUploadingChange}
                />
              );
            } else {
              return (
                <Input
                  key={field.name}
                  type={field.formType}
                  label={field.label}
                  placeholder={field.placeholder}
                  labelPlacement={field.labelPlacement}
                  defaultValue={
                    item ? `${item[field.name as keyof T]}` : field.defaultValue
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

        <Button type="submit" color="primary" isLoading={loading}>
          Зберегти
        </Button>
      </footer>
    </form>
  );
}
