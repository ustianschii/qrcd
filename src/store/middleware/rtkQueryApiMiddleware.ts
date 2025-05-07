import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";

import { RtkQueryMiddlewareAction, SerializedAxiosError } from "~/types";

export const rtkQueryApiMiddleware: Middleware = () => (next) => (action) => {
  const castedAction = action as RtkQueryMiddlewareAction<SerializedAxiosError>;
  const { payload } = castedAction;

  if (isRejectedWithValue(action)) {
    // eslint-disable-next-line no-console
    console.log(payload.message);
  }

  return next(action);
};
