"use client";

import { useEffect } from "react";

import { сategoriesActions } from "@/store";
import { EntitySlug } from "@/common/enums";
import { categoryService } from "@/services";
import { DataGrid } from "@/app/(admin)/components";
import { categorySchema } from "@/common/form-schemas";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { CreateCategoryDto, UpdateCategoryDto } from "@/common/models";

export const CategoriesGrid = () => {
  const dispatch = useAppDispatch();

  const { categories, loading } = useAppSelector((state) => state.сategories);

  const handleCreateCategory = async (data: CreateCategoryDto) => {
    await categoryService.create(data);
    dispatch(сategoriesActions.fetchCategories());
  };

  const handleUpdateCategory = async (id: string, data: UpdateCategoryDto) => {
    await categoryService.update(id, data);
    dispatch(сategoriesActions.fetchCategories());
  };

  const handleDeleteCategory = async (id: string) => {
    await categoryService.delete(id);
    dispatch(сategoriesActions.fetchCategories());
  };

  useEffect(() => {
    dispatch(сategoriesActions.fetchCategories());
  }, [dispatch]);

  return (
    <DataGrid
      title="Категорії"
      loading={loading}
      entitySlug={EntitySlug.CATEGORY}
      schema={categorySchema}
      data={categories}
      onCreate={handleCreateCategory}
      onUpdate={handleUpdateCategory}
      onDelete={handleDeleteCategory}
    ></DataGrid>
  );
};
