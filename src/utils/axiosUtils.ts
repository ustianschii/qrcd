import { AxiosError } from "axios";

import { ApiErrorResponse, SerializedAxiosError } from "~/types";

export const serializeAxiosError = (
  error: AxiosError<ApiErrorResponse>,
): SerializedAxiosError => {
  return {
    code: error.code,
    config: JSON.parse(JSON.stringify(error.config)),
    message: error.message,
    name: error.name,
    status: error.status,
    stack: error.stack,
    response: error.response
      ? {
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: JSON.parse(JSON.stringify(error.response.headers)),
        }
      : undefined,
  };
};
