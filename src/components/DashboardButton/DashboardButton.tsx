import { FC } from "react";
import { Button } from "@mui/material";

import { DashboardButtonProps } from "./types/DashboardButtonProps";

export const DashboardButton: FC<DashboardButtonProps> = ({ label }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "black",
        backgroundColor: "#e0e0e0",
        fontWeight: "bold",
        borderRadius: "10px",
        textTransform: "none",
        border: "none",
      }}
    >
      {label}
    </Button>
  );
};
