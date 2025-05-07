import { PropsWithChildren } from "react";
import { CssVarsProvider } from "@mui/joy/styles";

import { createCustomTheme } from "~/styles/theme";

const theme = createCustomTheme();

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
};

export default ThemeProvider;
