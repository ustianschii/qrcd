import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rtkQueryApi } from "~/api/rtkQueryApi";
import { LocalStorageKeys } from "~/config/constants";
import { ExampleFeatureEndpoint } from "~/features/structureExample/types";
import { rtkQueryTransform } from "~/store/transforms";

const combinedReducers = combineReducers({
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
});

const persistConfig = {
  key: LocalStorageKeys.PersistRoot.split(":")[1],
  storage,
  transforms: [
    rtkQueryTransform({
      persistQueries: [ExampleFeatureEndpoint.getAllItems],
      persistMutations: [],
    }),
  ],
  whitelist: [rtkQueryApi.reducerPath],
};

export const reducer = persistReducer(persistConfig, combinedReducers);
