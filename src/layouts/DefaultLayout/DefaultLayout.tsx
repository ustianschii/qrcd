import { PropsWithChildren } from "react";
import Stack from "@mui/joy/Stack";

import { Navbar } from "~/components/Navbar";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack direction="column">
      <Navbar />
      {children}
    </Stack>
  );
};

export default DefaultLayout;
