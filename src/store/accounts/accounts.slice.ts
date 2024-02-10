import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Account } from "@/common/models";

import { fetchAccounts } from "./accounts.actions";

export interface AccountsState {
  accounts: Account[];
  loading: boolean;
}

const initialState: AccountsState = {
  accounts: [],
  loading: false,
};

const { reducer, actions, name } = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccounts.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchAccounts.rejected, (state) => {
        alert("Щось пішло не так при загрузці рахунків");
        state.loading = false;
      });
  },
});

export {
  actions as accountsActions,
  reducer as accountsReducer,
  name as accountsName,
};
