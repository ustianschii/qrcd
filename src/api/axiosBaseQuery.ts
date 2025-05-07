import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import {
  ApiErrorResponse,
  AxiosBaseQueryMeta,
  SerializedAxiosError,
} from "~/types";
import { serializeAxiosError } from "~/utils/axiosUtils";

import { axiosInstance } from "./axios";

export const axiosBaseQuery: BaseQueryFn<
  AxiosRequestConfig,
  AxiosResponse["data"],
  SerializedAxiosError,
  object,
  AxiosBaseQueryMeta
> = async (config) => {
  try {
    const { data, ...meta } = await axiosInstance(config);
    return { data, meta };
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    return { error: serializeAxiosError(error), meta: error };
  }
};
