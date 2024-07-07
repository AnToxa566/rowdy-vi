"use client";

import { useState } from "react";
import { SliderPicker, ColorResult } from "react-color";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { ColumnDef } from "@/common/types";

interface ColorPickerProps<TFieldValues extends FieldValues> {
  field: ColumnDef;
  label: string;
  isRequired?: boolean;
  defaultSelectedColor?: string;
  register: UseFormRegister<TFieldValues>;
}

export const ColorPicker = <TFieldValues extends FieldValues>({
  field,
  label,
  register,
  isRequired = false,
  defaultSelectedColor = "",
}: ColorPickerProps<TFieldValues>) => {
  const [color, setColor] = useState<string>(defaultSelectedColor);

  const handleChangeComplete = (color: ColorResult) => {
    const event = {
      target: {
        name: field.name,
        value: color.hex,
      },
    };

    setColor(color.hex);
    register(field.name as Path<TFieldValues>, {
      required: isRequired,
    }).onChange(event);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-sm">{label}</span>
        {isRequired && <span className="text-sm text-danger-500"> *</span>}
      </div>

      <SliderPicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};
