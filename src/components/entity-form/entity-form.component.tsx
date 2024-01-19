"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

import { ColumnDef } from "@/common/types";
import { FormFieldType } from "@/common/enums";

export interface InputsTemplate {
  [key: string]: string;
}

export interface EntityFormProps {
  schema: ColumnDef[];
  entitySlug: string;
  updateState?: boolean;
  onCancel?: () => void;
  onSave?: (data: InputsTemplate) => void;
}

const EntityForm: FC<EntityFormProps> = ({
  schema,
  entitySlug,
  updateState = false,
  onCancel = () => {},
  onSave = () => {},
}) => {
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
                  value={field.defaultValue}
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
                  defaultSelectedKeys={field.defaultSelectedKeys}
                  {...register(field.name)}
                >
                  {field.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              );
            } else {
              return (
                <Input
                  key={field.name}
                  type={field.type}
                  label={field.label}
                  placeholder={field.placeholder}
                  labelPlacement={field.labelPlacement}
                  value={field.defaultValue}
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
};

export { EntityForm };
