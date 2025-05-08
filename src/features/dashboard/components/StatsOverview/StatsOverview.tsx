import { FC } from "react";
import { Box } from "@mui/material";

import { DashboardButton } from "~/components/DashboardButton/DashboardButton";
import { StatCard } from "~/features/dashboard/components/StatCard/StatCard";

export const StatsOverview: FC = () => {
  const labels = [
    "Generate QR Code",
    "View your QR Codes",
    "View Scan Analytics",
  ];
  const buttons = labels.map((label) => (
    <DashboardButton key={label} label={label} />
  ));

  const stats = [
    { title: "Total QR Codes", value: 742, change: "+5%" },
    { title: "Total Scans", value: 12895, change: "+12%" },
    { title: "Active Users", value: 573, change: "+8%" },
  ];

  const cards = stats.map(({ title, value, change }) => (
    <StatCard key={title} title={title} value={value} change={change} />
  ));
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "1rem", m: "1rem 0" }}>{buttons}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          m: "1rem 0",
        }}
      >
        {cards}
      </Box>
    </Box>
  );
};
