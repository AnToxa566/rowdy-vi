import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardAccountState {
  account: string | "all";
}

const initialState: DashboardAccountState = {
  account: "all",
};

const { reducer, actions, name } = createSlice({
  name: "dashboardAccount",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
  },
});

export {
  actions as dashboardAccountActions,
  reducer as dashboardAccountReducer,
  name as dashboardAccountName,
};
