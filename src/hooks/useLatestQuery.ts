import { useMemo } from "react";
import { useSelector } from "react-redux";
import defaultTo from "lodash/defaultTo";
import merge from "lodash/merge";
import {
  EndpointDefinition,
  QueryStatus,
  QuerySubState,
} from "@reduxjs/toolkit/query";

import { axiosBaseQuery } from "~/api/axiosBaseQuery";
import { RootState } from "~/store";
import { WithRequired } from "~/types";

interface UseLatestQueryOptions {
  status?: QueryStatus;
  timeStamp?: "startedTimeStamp" | "fulfilledTimeStamp";
}

const defaultOptions: UseLatestQueryOptions = {
  status: undefined,
  timeStamp: "startedTimeStamp",
};

const useLatestQuery = <Q, R>(
  endpointName: string,
  options?: UseLatestQueryOptions,
) => {
  const queries = useSelector<RootState>(
    (state) => state.api.queries,
  ) as RootState["api"]["queries"];
  const mergedOptions = merge(options, defaultOptions);
  const timeStamp =
    mergedOptions.timeStamp as Required<UseLatestQueryOptions>["timeStamp"];

  const latest = useMemo(
    () =>
      Object.values(queries)
        .filter(
          (query) =>
            query?.endpointName === endpointName &&
            (mergedOptions.status
              ? query.status === mergedOptions.status
              : true),
        )
        .sort((a, b) => b![timeStamp]! - a![timeStamp]!)
        .at(0),
    [queries],
  );

  return defaultTo(latest, {}) as WithRequired<
    QuerySubState<EndpointDefinition<Q, typeof axiosBaseQuery, string, R>>,
    "originalArgs"
  >;
};

export default useLatestQuery;
