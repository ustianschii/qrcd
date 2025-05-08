import { PropsWithChildren } from "react";
import Stack from "@mui/joy/Stack";

import { Header } from "~/components/Header/Header";
import { PageWrapper } from "~/components/PageWrapper/PageWrapper";

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack direction="column">
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </Stack>
  );
};
