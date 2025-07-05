"use client";

import { useEffect, useMemo } from "react";

import { EntitySlug } from "@/common/enums";
import { productSchema } from "@/common/form-schemas";
import { CreateProductDto, UpdateProductDto } from "@/common/models";

import { productsActions } from "@/store/products";
import { useAppDispatch, useAppSelector } from "@/hooks";

import { DataGrid } from "@/app/(admin)/components";

interface MappedProduct {
  id: string;
  labelEn: string;
  labelRu: string;
  labelUk: string;
  price: number;
  count: number;
  imageSrc: string;
}

export const ProductsGrid = () => {
  const dispatch = useAppDispatch();

  const { products, loading } = useAppSelector((state) => state.products);

  const handleCreateProduct = async (data: MappedProduct) => {
    const product: CreateProductDto = {
      ...data,
      label: {
        en: data.labelEn,
        ru: data.labelRu,
        uk: data.labelUk,
      },
    };

    dispatch(productsActions.createProduct(product));
  };

  const handleUpdateProduct = async (id: string, data: MappedProduct) => {
    const product: UpdateProductDto = {
      ...data,
      label: {
        en: data.labelEn,
        ru: data.labelRu,
        uk: data.labelUk,
      },
    };
    
    dispatch(productsActions.updateProduct({ id, data: product }));
  };

  const handleDeleteProduct = async (id: string) => {
    dispatch(productsActions.deleteProduct(id));
  };

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);

  const mappedProducts = useMemo(() => {
    return products.map((product) => ({
      ...product,
      labelEn: product.label.en,
      labelRu: product.label.ru,
      labelUk: product.label.uk,
    }));
  }, [products]);

  return (
    <DataGrid
      title="Продукти"
      loading={loading}
      data={mappedProducts}
      schema={productSchema}
      entitySlug={EntitySlug.PRODUCT}
      onCreate={handleCreateProduct}
      onUpdate={handleUpdateProduct}
      onDelete={handleDeleteProduct}
    ></DataGrid>
  );
};
