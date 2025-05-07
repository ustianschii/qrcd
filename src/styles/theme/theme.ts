import { extendTheme } from "@mui/joy/styles";

import { JoyButton } from "./components";

const createCustomTheme = () =>
  extendTheme({
    components: {
      JoyButton,
    },
  });

export default createCustomTheme;
