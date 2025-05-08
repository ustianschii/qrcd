import { FC } from "react";
import { Box } from "@mui/material";

import { StatsOverview } from "~/features/dashboard/components/StatsOverview/StatsOverview";
import { ActivitySummary } from "~/features/dashboard/components/ActivitySummary/ActivitySummary";

export const DashboardPage: FC = () => {
  return (
    <Box>
      <StatsOverview />
      <ActivitySummary />
    </Box>
  );
};
