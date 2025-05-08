import { PropsWithChildren } from "react";
import Stack from "@mui/joy/Stack";

// import { Navbar } from "~/components/Navbar";
import { Sidebar } from "~/components/Sidebar/";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack direction="column">
      <Sidebar />
      {/* <Navbar /> */}
      {children}
    </Stack>
  );
};

export default DefaultLayout;
