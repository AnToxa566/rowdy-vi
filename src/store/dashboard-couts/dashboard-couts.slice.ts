import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardCountsState {
  totalIncome: number;
  totalExpense: number;
}

const initialState: DashboardCountsState = {
  totalIncome: 0,
  totalExpense: 0,
};

const { reducer, actions, name } = createSlice({
  name: "dashboardCounts",
  initialState,
  reducers: {
    setTotalIncome: (state, action: PayloadAction<number>) => {
      state.totalIncome = action.payload;
    },
    setTotalExpense: (state, action: PayloadAction<number>) => {
      state.totalExpense = action.payload;
    },
  },
});

export {
  actions as dashboardCountsActions,
  reducer as dashboardCountsReducer,
  name as dashboardCountsName,
};
