import "./styles/tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "~/components/_App";
import "~/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
