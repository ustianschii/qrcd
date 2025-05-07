/* eslint-disable react-refresh/only-export-components */
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from "@testing-library/react";
import { MemoryRouter, MemoryRouterProps } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/lib/persistReducer";

import { reducer, RootState, rtkQueryApiMiddleware } from "~/store";
import { DeepPartial } from "~/types";
import { rtkQueryApi } from "~/api/rtkQueryApi";
import { ThemeProvider } from "~/components/JoyUI/ThemeProvider";

const customRender = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, "queries"> & {
    routerProps?: MemoryRouterProps;
    preloadedState?: DeepPartial<RootState>;
  },
) => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(
        rtkQueryApi.middleware,
        rtkQueryApiMiddleware,
      ),
    preloadedState: options?.preloadedState as RootState & PersistPartial,
  });

  return {
    ...render(
      <ThemeProvider>
        <Provider store={store}>
          <MemoryRouter {...options?.routerProps}>{ui}</MemoryRouter>
        </Provider>
      </ThemeProvider>,
    ),
    store,
  } as ReturnType<typeof render> & { store: typeof store };
};

const customRenderHook = <T,>(
  hook: (props: unknown) => T,
  options?: RenderHookOptions<unknown> & {
    preloadedState?: DeepPartial<RootState>;
  },
) => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(rtkQueryApi.middleware),
    preloadedState: options?.preloadedState as RootState & PersistPartial,
  });

  return {
    ...renderHook(hook, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    }),
    store,
  };
};

export * from "@testing-library/react";
export { customRender, customRenderHook };
