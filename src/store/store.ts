import { configureStore } from "@reduxjs/toolkit";

import { dashboardDateReducer } from "./dashboard-date";
import { dashboardCountsReducer } from "./dashboard-couts";

export const store = configureStore({
  reducer: {
    dashboardDate: dashboardDateReducer,
    dashboardCounts: dashboardCountsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
