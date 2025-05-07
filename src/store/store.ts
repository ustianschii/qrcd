import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistStore, PURGE } from "redux-persist";

import { rtkQueryApi } from "~/api/rtkQueryApi";

import { reducer } from "./reducer";
import { rtkQueryApiMiddleware } from "./middleware";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    })
      .concat(rtkQueryApi.middleware)
      .concat(rtkQueryApiMiddleware),
});

export const persistor = persistStore(store);
