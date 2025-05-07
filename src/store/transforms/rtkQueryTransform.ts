import { createTransform } from "redux-persist";

import { rtkQueryApi } from "~/api/rtkQueryApi";

type WithQueriesAndMutations = {
  queries: Record<string, unknown>;
  mutations: Record<string, unknown>;
};

interface RtkQueryTransformOptions {
  persistQueries: string[];
  persistMutations: string[];
}

const getFilteredSubState = <T extends object>(
  object: T,
  persistKeys: string[],
) => {
  return Object.entries(object).reduce(
    (acc: Record<string, unknown>, [key, value]) => {
      if (persistKeys.some((k) => key.startsWith(k))) {
        acc[key] = value;
      }

      return acc;
    },
    {},
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rtkQueryTransform: (options: RtkQueryTransformOptions) => any = (
  options,
) =>
  createTransform(
    (inbound: WithQueriesAndMutations, key) => {
      if (key === rtkQueryApi.reducerPath) {
        const {
          queries: inboundQueries,
          mutations: inboundMutations,
          ...apiConfig
        } = inbound;

        const queries = getFilteredSubState(
          inboundQueries,
          options.persistQueries,
        );

        const mutations = getFilteredSubState(
          inboundMutations,
          options.persistMutations,
        );

        return { queries, mutations, ...apiConfig };
      }

      return inbound;
    },
    (state) => state,
    { whitelist: [rtkQueryApi.reducerPath] },
  );
