import { QueryStatus } from "@reduxjs/toolkit/query";

import { RootState } from "~/store";
import { DeepPartial } from "~/types";
import { customRenderHook } from "~/utils";
import { useLatestQuery } from "~/hooks";

const buildQuery = (
  endpointName: string,
  startedTimeStamp: number,
  status: QueryStatus,
) =>
  ({
    endpointName,
    startedTimeStamp,
    status,
  }) as any;

const preloadedState: DeepPartial<RootState> = {
  api: {
    queries: {
      "query({q:''})": buildQuery("query", 0, QueryStatus.fulfilled),
      "query({q:'a'})": buildQuery("query", 1, QueryStatus.fulfilled),
      "test(undefined)": buildQuery("test", 0, QueryStatus.pending),
    },
  },
};

describe("useLatestQuery hook", () => {
  it("should return latest fulfilled query", () => {
    const { result } = customRenderHook(
      () => useLatestQuery("query", { status: QueryStatus.fulfilled }),
      { preloadedState },
    );
    expect(result.current.startedTimeStamp).toEqual(1);
  });

  it("should return latest pending query", () => {
    const { result } = customRenderHook(() => useLatestQuery("test"), {
      preloadedState,
    });
    expect(result.current.status).toEqual(QueryStatus.pending);
  });
});
