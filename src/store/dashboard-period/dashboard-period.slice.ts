import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DashboardPeriod } from "@/common/enums";

export interface DashboardPeriodState {
  period: DashboardPeriod;
}

const initialState: DashboardPeriodState = {
  period: DashboardPeriod.DAIYLY,
};

const { reducer, actions, name } = createSlice({
  name: "dashboardPeriod",
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<DashboardPeriod>) => {
      state.period = action.payload;
    },
  },
});

export {
  actions as dashboardPeriodActions,
  reducer as dashboardPeriodReducer,
  name as dashboardPeriodName,
};
