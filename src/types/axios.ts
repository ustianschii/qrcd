import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export type ApiErrorResponse = { message: string };

export type AxiosBaseQueryMeta =
  | Omit<AxiosResponse, "data">
  | AxiosError<ApiErrorResponse>;

export type SerializedAxiosError = Pick<
  AxiosError,
  "code" | "config" | "message" | "name" | "status" | "stack"
> & {
  response?: Pick<
    Required<AxiosError<ApiErrorResponse>>["response"],
    "data" | "status" | "statusText"
  > & {
    headers: Record<string, string>;
  };
};

export type RtkQueryMiddlewareAction<
  Payload = unknown,
  Args = unknown,
> = PayloadAction<Payload> & {
  meta: {
    arg: {
      endpointName: string;
      originalArgs?: Args;
    };
    baseQueryMeta: AxiosBaseQueryMeta;
  };
};
