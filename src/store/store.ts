import { configureStore } from "@reduxjs/toolkit";

import { accountsReducer } from "./accounts";
import { dashboardDateReducer } from "./dashboard-date";
import { dashboardCountsReducer } from "./dashboard-couts";
import { dashboardPeriodReducer } from "./dashboard-period";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    dashboardDate: dashboardDateReducer,
    dashboardCounts: dashboardCountsReducer,
    dashboardPeriod: dashboardPeriodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
