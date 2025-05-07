import { useTranslation } from "react-i18next";

import classes from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return <div className={classes.container}>{t("errorPages.title.404")}</div>;
};

export default NotFound;
