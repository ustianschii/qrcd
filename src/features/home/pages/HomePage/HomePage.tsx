import { useTranslation } from "react-i18next";
import Stack from "@mui/joy/Stack";

import { className } from "~/utils";
import reactLogo from "~/assets/svg/react.svg";

import viteLogo from "/svg/vite.svg";

import classes from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Stack alignItems="center">
      <Stack direction="row" gap={4}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={className(classes.logo, classes.react)}
            alt="React logo"
          />
        </a>
      </Stack>
      <h2>Vite + React</h2>
      <p>{t("hello")}</p>
    </Stack>
  );
};

export default HomePage;
