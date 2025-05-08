import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { persistor, store } from "~/store";
import { AppRouter } from "~/routes/components";
import { GlobalLoader } from "~/components/GlobalLoader";
import { theme } from "~/styles/muiTheme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<GlobalLoader />}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
