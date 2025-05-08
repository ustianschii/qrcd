import { FC } from "react";
import { Box } from "@mui/material";

import { PageWrapperProps } from "./types/pageWrappetTypes";

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <Box>{children}</Box>;
};
