import { createAsyncThunk } from "@reduxjs/toolkit";

import { productsService } from "@/services";

import { ActionType } from "./common";
import { CreateProductDto, UpdateProductDto } from "@/common/models";

export const fetchProducts = createAsyncThunk(
  ActionType.FETCH_PRODUCTS,
  async (_request, thunkAPI) => {
    try {
      return await productsService.findAll();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  ActionType.CREATE_PRODUCT,
  async (data: CreateProductDto, thunkAPI) => {
    try {
      return await productsService.create(data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  ActionType.UPDATE_PRODUCT,
  async ({ id, data }: { id: string; data: UpdateProductDto }, thunkAPI) => {
    try {
      return await productsService.update(id, data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  ActionType.DELETE_PRODUCT,
  async (id: string, thunkAPI) => {
    try {
      const isDeleted = await productsService.delete(id);

      if (isDeleted) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("Product deletion failed");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
