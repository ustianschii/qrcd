import { rtkQueryApi } from "~/api/rtkQueryApi";
import {
  ExampleFeatureResponse,
  ExampleFeatureRequest,
  ExampleFeatureApiPath,
  ExampleFeatureEndpoint,
} from "~/features/structureExample/types";

const api = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    [ExampleFeatureEndpoint.getAllItems]: build.query<
      ExampleFeatureResponse,
      ExampleFeatureRequest
    >({
      query: (params) => ({ url: ExampleFeatureApiPath.getAllItems, params }),
    }),
  }),
});

export const { useGetAllItemsQuery, useLazyGetAllItemsQuery } = api;
export default api;
