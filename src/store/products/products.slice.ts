import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/common/models";

import { createProduct, deleteProduct, fetchProducts, updateProduct } from "./products.actions";
import { PageResult } from "@/services";

export interface ProductsState {
  loading: boolean;
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const { reducer, actions, name } = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<PageResult<Product>>) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })

      // Create
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state) => {
        state.loading = false;
      })

      // Update
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;

        const index = state.products.findIndex((p) => p._id === action.payload._id);
        
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state) => {
        state.loading = false;
      })

      // Delete
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.products = state.products.filter((p) => p._id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export {
  actions as productsActions,
  reducer as productsReducer,
  name as productsName,
};
