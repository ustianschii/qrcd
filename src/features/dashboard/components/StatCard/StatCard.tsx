import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { StatCardProps } from "./types/statCardTypes";

export const StatCard: FC<StatCardProps> = ({ title, value, change }) => {
  return (
    <Card
      sx={{
        minWidth: "32%",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>{value}</Typography>
        <Typography sx={{ color: "green" }}>{change}</Typography>
      </CardContent>
    </Card>
  );
};
