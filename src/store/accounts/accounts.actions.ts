import { createAsyncThunk } from "@reduxjs/toolkit";

import { accountService } from "@/services";

import { ActionType } from "./common";
import { accountsActions } from "./accounts.slice";

export const fetchAccounts = createAsyncThunk(
  ActionType.FETCH_ACCOUNTS,
  async (_request, { dispatch }) => {
    const accounts = await accountService.findAll();
    dispatch(accountsActions.setAccounts(accounts.data));
  }
);
