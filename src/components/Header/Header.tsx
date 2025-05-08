import { FC } from "react";
import { Box, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <Box>
      <Typography component="h1" fontSize="2rem" fontWeight="bold">
        Dashboard
      </Typography>
      <Typography component="h4" color="gray" fontSize="1rem">
        Hi, here is what is happening with your QR codes
      </Typography>
    </Box>
  );
};
