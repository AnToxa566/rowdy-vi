import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardDateState {
  startDate: Date;
  endDate: Date;
}

const initialState: DashboardDateState = {
  startDate: new Date(new Date().setHours(0, 0, 0, 0)),
  endDate: new Date(new Date().setHours(23, 59, 59, 99)),
};

const { reducer, actions, name } = createSlice({
  name: "dashboardDate",
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date>) => {
      state.endDate = action.payload;
    },
  },
});

export {
  actions as dashboardDateActions,
  reducer as dashboardDateReducer,
  name as dashboardDateName,
};
