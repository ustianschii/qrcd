import { Action, ThunkAction } from "@reduxjs/toolkit";

import { DeepOmit } from "~/types";

import { store } from "./store";

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = DeepOmit<ReturnType<AppStore["getState"]>, "_persist">;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
