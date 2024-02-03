"use client";

import { useState } from "react";

import { Button, ButtonGroup } from "@nextui-org/react";

import { DashboardPeriod } from "@/common/enums";

const PeriodSelect = () => {
  const [dashboardState, setDashboardState] = useState(DashboardPeriod.DAIYLY);

  return (
    <ButtonGroup>
      {Object.entries(DashboardPeriod).map((period) => (
        <Button
          key={period[0]}
          color={dashboardState === period[1] ? "danger" : "default"}
          onPress={() => setDashboardState(period[1])}
        >
          {period[1]}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export { PeriodSelect };
