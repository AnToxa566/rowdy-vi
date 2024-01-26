"use client";

import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { dashboardDateActions } from "@/store";

const DateSelect = () => {
  const { startDate, endDate } = useAppSelector((state) => state.dashboardDate);

  const dispatch = useAppDispatch();

  const handlePrevDate = () => {
    const newStartDate = new Date(startDate.setDate(startDate.getDate() - 1));
    const newEndDate = new Date(endDate.setDate(endDate.getDate() - 1));

    dispatch(dashboardDateActions.setStartDate(newStartDate));
    dispatch(dashboardDateActions.setEndDate(newEndDate));
  };

  const handleNextDate = () => {
    const newStartDate = new Date(startDate.setDate(startDate.getDate() + 1));
    const newEndDate = new Date(endDate.setDate(endDate.getDate() + 1));

    dispatch(dashboardDateActions.setStartDate(newStartDate));
    dispatch(dashboardDateActions.setEndDate(newEndDate));
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <RiArrowDropLeftLine
        className="cursor-pointer"
        onClick={handlePrevDate}
      />

      <span className="font-semibold">
        {startDate.toLocaleDateString("uk")}
      </span>

      <RiArrowDropRightLine
        className="cursor-pointer"
        onClick={handleNextDate}
      />
    </div>
  );
};

export { DateSelect };
