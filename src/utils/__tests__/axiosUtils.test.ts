import { AxiosError } from "axios";

import { ApiErrorResponse } from "~/types";
import { serializeAxiosError } from "~/utils";

describe("Axios utils", () => {
  it("serializeAxiosError should serialize an AxiosError with a response", () => {
    const mockError = {
      code: "ERR_BAD_REQUEST",
      config: { url: "/test", method: "get" },
      message: "Request failed",
      name: "AxiosError",
      status: 400,
      stack: "Error stack",
      response: {
        data: { message: "error data" },
        status: 400,
        statusText: "Bad Request",
        headers: { "content-type": "application/json" },
      },
    } as unknown as AxiosError<ApiErrorResponse>;

    const serializedError = serializeAxiosError(mockError);

    expect(serializedError).toEqual({
      code: mockError.code,
      config: JSON.parse(JSON.stringify(mockError.config)),
      message: mockError.message,
      name: mockError.name,
      status: mockError.status,
      stack: mockError.stack,
      response: {
        data: mockError.response?.data,
        status: mockError.response?.status,
        statusText: mockError.response?.statusText,
        headers: JSON.parse(JSON.stringify(mockError.response!.headers)),
      },
    });
  });

  it("serializeAxiosError should serialize an AxiosError without a response", () => {
    const mockError = {
      code: "ERR_NETWORK",
      config: { url: "/test", method: "get" },
      message: "Network Error",
      name: "AxiosError",
      status: undefined,
      stack: "Error stack",
      response: undefined,
    } as AxiosError<ApiErrorResponse>;

    const serializedError = serializeAxiosError(mockError);

    expect(serializedError).toEqual({
      code: mockError.code,
      config: JSON.parse(JSON.stringify(mockError.config)),
      message: mockError.message,
      name: mockError.name,
      status: mockError.status,
      stack: mockError.stack,
      response: mockError.response,
    });
  });
});
