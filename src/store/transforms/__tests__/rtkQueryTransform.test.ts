import { describe, it, expect } from "vitest";

import { rtkQueryTransform } from "~/store/transforms";

vi.mock("redux-persist", () => ({
  createTransform: (inbound: any, outbound: any) => ({
    in: inbound,
    out: outbound,
  }),
}));

vi.mock("~/api/rtkQueryApi", () => ({
  rtkQueryApi: {
    reducerPath: "api",
    injectEndpoints: vi.fn(),
  },
}));

describe("rtkQueryTransform", () => {
  const mockState = {
    queries: {
      'getPaginatedRecipes({"page":1})': { data: "Recipe Page 1" },
      'getOtherData({"id":1})': { data: "Other Data" },
    },
    mutations: {
      'updateRecipe({"id":1})': { status: "fulfilled" },
      'deleteRecipe({"id":1})': { status: "pending" },
    },
  };

  it("should persist only the specified queries", () => {
    const transform = rtkQueryTransform({
      persistQueries: ["getPaginatedRecipes"],
      persistMutations: [],
    });

    const inbound = transform.in(mockState, "api");

    expect(inbound).toEqual({
      queries: {
        'getPaginatedRecipes({"page":1})': { data: "Recipe Page 1" },
      },
      mutations: {},
    });
  });

  it("should persist only the specified mutations", () => {
    const transform = rtkQueryTransform({
      persistQueries: [],
      persistMutations: ["updateRecipe"],
    });

    const inbound = transform.in(mockState, "api");

    expect(inbound).toEqual({
      queries: {},
      mutations: {
        'updateRecipe({"id":1})': { status: "fulfilled" },
      },
    });
  });

  it("should persist both specified queries and mutations", () => {
    const transform = rtkQueryTransform({
      persistQueries: ["getPaginatedRecipes"],
      persistMutations: ["updateRecipe"],
    });

    const inbound = transform.in(mockState, "api");

    expect(inbound).toEqual({
      queries: {
        'getPaginatedRecipes({"page":1})': { data: "Recipe Page 1" },
      },
      mutations: {
        'updateRecipe({"id":1})': { status: "fulfilled" },
      },
    });
  });

  it("should return the state unchanged for non-matching keys", () => {
    const transform = rtkQueryTransform({
      persistQueries: ["getPaginatedRecipes"],
      persistMutations: ["updateRecipe"],
    });

    const inbound = transform.in(mockState, "asd");

    expect(inbound).toEqual(mockState);
  });

  it("should rehydrate the state as is", () => {
    const transform = rtkQueryTransform({
      persistQueries: ["getPaginatedRecipes"],
      persistMutations: ["updateRecipe"],
    });

    const outbound = transform.out(mockState, "api");

    expect(outbound).toEqual(mockState);
  });
});
