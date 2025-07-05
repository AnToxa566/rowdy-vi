'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Image } from '@nextui-org/react';

import { ColumnDef } from '@/common/types';
import { uploadService } from '@/services';

interface ImageUploaderProps<TFieldValues extends FieldValues> {
  field: ColumnDef;
  defaultValue?: string;
  register: UseFormRegister<TFieldValues>;
  onUploadingChange?: (isUploading: boolean) => void;
}

export const ImageUploader = <TFieldValues extends FieldValues>({
  field,
  register,
  defaultValue = '',
  onUploadingChange,
}: ImageUploaderProps<TFieldValues>) => {
  const [preview, setPreview] = useState<string>(defaultValue);
  const [uploading, setUploading] = useState<boolean>(false);

  const triggerOnChange = (value: string) => {
    register(field.name as Path<TFieldValues>).onChange({
      target: {
        name: field.name,
        value,
      },
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setUploading(true);

    try {
      const imageUrl = await uploadService.uploadImage(file);

      setPreview(imageUrl);
      triggerOnChange(imageUrl);
    } catch (err: any) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      triggerOnChange(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onUploadingChange?.(uploading);
  }, [onUploadingChange, uploading]);

  return (
    <div className="flex flex-col gap-2">
      {preview && (
        <Image
          src={preview}
          width={100}
          radius="sm"
          alt="Загруженное изображение"
          className="w-full h-full object-cover"
        />
      )}

      <div className="flex flex-col gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required={!preview && field.isRequired}
          disabled={uploading || field.disabled}
        />

        {uploading && <span className="text-sm text-gray-500">Loading...</span>}
      </div>
    </div>
  );
};
