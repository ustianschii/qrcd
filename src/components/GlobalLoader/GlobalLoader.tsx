import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

import { testIds } from "~/utils";

const GlobalLoader: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100dvh"
    >
      <CircularProgress data-testid={testIds.components.globalLoader} />
    </Box>
  );
};

export default GlobalLoader;
