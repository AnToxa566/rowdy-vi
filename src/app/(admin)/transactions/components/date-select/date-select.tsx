"use client";

import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { dashboardDateActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { DashboardPeriod } from "@/common/enums";

const DateSelect = () => {
  const dispatch = useAppDispatch();

  const { period } = useAppSelector((state) => state.dashboardPeriod);

  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const handleScrollDate = (next: boolean = true): void => {
    let newStartDate;
    let newEndDate;

    if (period === DashboardPeriod.DAIYLY) {
      newStartDate = new Date(
        startDate.setDate(startDate.getDate() + (next ? 1 : -1))
      );
      newEndDate = new Date(
        endDate.setDate(endDate.getDate() + (next ? 1 : -1))
      );
    } else if (period === DashboardPeriod.WEEKLY) {
      newStartDate = new Date(
        startDate.setDate(startDate.getDate() + (next ? 7 : -7))
      );
      newEndDate = new Date(
        endDate.setDate(endDate.getDate() + (next ? 7 : -7))
      );
    } else if (period === DashboardPeriod.MONTHLY) {
      newStartDate = new Date(
        startDate.setMonth(startDate.getMonth() + (next ? 1 : -1))
      );
      newEndDate = new Date(
        endDate.setMonth(endDate.getMonth() + (next ? 1 : -1))
      );
    } else {
      newStartDate = new Date(
        startDate.setFullYear(startDate.getFullYear() + (next ? 1 : -1))
      );
      newEndDate = new Date(
        endDate.setFullYear(endDate.getFullYear() + (next ? 1 : -1))
      );
    }

    dispatch(dashboardDateActions.setStartDate(newStartDate));
    dispatch(dashboardDateActions.setEndDate(newEndDate));
  };

  const getDateLabel = (): string => {
    if (period === DashboardPeriod.DAIYLY) {
      return startDate.toLocaleDateString("uk");
    } else if (period === DashboardPeriod.WEEKLY) {
      return `
        ${startDate.toLocaleDateString("uk")} - 
        ${endDate.toLocaleDateString("uk")}
      `;
    } else if (period === DashboardPeriod.MONTHLY) {
      return startDate.toLocaleString("uk", { month: "long" }).toUpperCase();
    } else {
      return startDate.getFullYear().toString();
    }
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <RiArrowDropLeftLine
        className="cursor-pointer"
        onClick={() => handleScrollDate(false)}
      />

      <span className="font-semibold">{getDateLabel()}</span>

      <RiArrowDropRightLine
        className="cursor-pointer"
        onClick={() => handleScrollDate(true)}
      />
    </div>
  );
};

export { DateSelect };
