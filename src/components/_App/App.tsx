import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CssBaseline from "@mui/joy/CssBaseline";

import { persistor, store } from "~/store";
import { AppRouter } from "~/routes/components";
import { GlobalLoader } from "~/components/GlobalLoader";
import { ThemeProvider } from "~/components/JoyUI/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
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
