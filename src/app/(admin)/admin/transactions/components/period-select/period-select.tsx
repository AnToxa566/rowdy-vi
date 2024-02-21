"use client";

import { Button, ButtonGroup } from "@nextui-org/react";

import { DashboardPeriod } from "@/common/enums";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { dashboardPeriodActions, dashboardDateActions } from "@/store";

const PeriodSelect = () => {
  const dispatch = useAppDispatch();

  const { period: dashboardPeriod } = useAppSelector(
    (state) => state.dashboardPeriod
  );

  const handlePeriodChange = (period: DashboardPeriod) => {
    let startDate: Date = getToday();
    let endDate: Date = getToday();

    if (period === DashboardPeriod.DAIYLY) {
      endDate.setDate(endDate.getDate() + 1);
    } else if (period === DashboardPeriod.WEEKLY) {
      startDate = getThisWeekMonday(startDate);
      endDate.setDate(startDate.getDate() + 7);
    } else if (period === DashboardPeriod.MONTHLY) {
      startDate.setDate(1);

      endDate.setDate(1);
      endDate.setMonth(startDate.getMonth() + 1);
    } else if (period === DashboardPeriod.ANNUAL) {
      startDate.setFullYear(startDate.getFullYear(), 0, 1);
      endDate.setFullYear(startDate.getFullYear() + 1, 0, 1);
    }

    dispatch(dashboardDateActions.setStartDate(startDate));
    dispatch(dashboardDateActions.setEndDate(endDate));

    dispatch(dashboardPeriodActions.setPeriod(period));
  };

  const getToday = () => {
    return new Date(new Date().setHours(0, 0, 0, 0));
  };

  const getThisWeekMonday = (date: Date): Date => {
    const day = date.getDay();
    const newDate = new Date(date);

    return new Date(
      newDate.setDate(newDate.getDate() - day + (day === 0 ? -6 : 1))
    );
  };

  return (
    <ButtonGroup>
      {Object.entries(DashboardPeriod).map((period) => (
        <Button
          key={period[0]}
          color={dashboardPeriod === period[1] ? "danger" : "default"}
          onPress={() => handlePeriodChange(period[1])}
        >
          {period[1]}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export { PeriodSelect };
