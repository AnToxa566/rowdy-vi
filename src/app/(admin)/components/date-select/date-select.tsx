"use client";

import { ChangeEvent, ReactNode } from "react";

import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { formateDate } from "@/common/utils";
import { dashboardDateActions } from "@/store";
import { DashboardPeriod } from "@/common/enums";
import { useAppDispatch, useAppSelector } from "@/hooks";

const DateSelect = () => {
  const datePickerId = "date-picker";

  const dispatch = useAppDispatch();

  const { period } = useAppSelector((state) => state.dashboardPeriod);

  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const handleDatePickerClick = (): void => {
    const datePicker = document.querySelector(
      `#${datePickerId}`
    ) as HTMLInputElement;

    datePicker.showPicker();
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newStartDate = new Date(event.target.value);
    const newEndDate = new Date(newStartDate.toDateString());

    newEndDate.setDate(newEndDate.getDate() + 1);

    dispatch(dashboardDateActions.setStartDate(newStartDate));
    dispatch(dashboardDateActions.setEndDate(newEndDate));
  };

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

  const getDateLabel = (): ReactNode => {
    if (period === DashboardPeriod.DAIYLY) {
      return (
        <div className="relative">
          <label
            htmlFor={datePickerId}
            className="underline cursor-pointer"
            onClick={handleDatePickerClick}
          >
            {startDate.toLocaleDateString("uk")}
          </label>

          <input
            id={datePickerId}
            value={formateDate(startDate)}
            type="date"
            className="absolute left-0 invisible -translate-x-1/2"
            onChange={handleDateChange}
          />
        </div>
      );
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
