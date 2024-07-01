import { createAsyncThunk } from "@reduxjs/toolkit";

import { categoryService } from "@/services";

import { ActionType } from "./common";
import { сategoriesActions } from "./categories.slice";

export const fetchCategories = createAsyncThunk(
  ActionType.FETCH_CATEGORIES,
  async (_request, { dispatch }) => {
    const categories = await categoryService.findAll();
    dispatch(сategoriesActions.setCategories(categories.data));
  }
);
