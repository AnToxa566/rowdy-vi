import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Category } from "@/common/models";

import { fetchCategories } from "./categories.actions";

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
};

const { reducer, actions, name } = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        alert("Щось пішло не так при загрузці категорій");
        state.loading = false;
      });
  },
});

export {
  actions as сategoriesActions,
  reducer as сategoriesReducer,
  name as сategoriesName,
};
