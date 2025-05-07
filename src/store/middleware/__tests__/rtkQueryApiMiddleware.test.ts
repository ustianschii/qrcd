import { MiddlewareAPI, isRejectedWithValue } from "@reduxjs/toolkit";
import { Mock } from "vitest";

import {
  DeepPartial,
  RtkQueryMiddlewareAction,
  SerializedAxiosError,
} from "~/types";
import { rtkQueryApiMiddleware } from "~/store/middleware";

vi.mock("@reduxjs/toolkit", async (importOriginal) => {
  const original: object = await importOriginal();
  return {
    ...original,
    isRejectedWithValue: vi.fn(),
  };
});

describe("RTK Query API Middleware", () => {
  const next = vi.fn();
  const store = {
    dispatch: vi.fn(),
    getState: vi.fn(),
  } as unknown as MiddlewareAPI;

  it("should log error to console when action is rejected with value", () => {
    (isRejectedWithValue as unknown as Mock).mockReturnValue(true);

    const action: DeepPartial<RtkQueryMiddlewareAction<SerializedAxiosError>> =
      {
        type: "api/rejected",
        meta: {
          baseQueryMeta: {
            status: 400,
          },
        },
        payload: {
          code: "ERR_BAD_REQUEST",
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
        },
      };

    rtkQueryApiMiddleware(store)(next)(action);
  });

  it("should pass through when action is not rejected with value", () => {
    (isRejectedWithValue as unknown as Mock).mockReturnValue(false);

    const action = {
      type: "api/fulfilled",
      payload: { data: "test data" },
    };

    rtkQueryApiMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});
