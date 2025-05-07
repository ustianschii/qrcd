import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "./axiosBaseQuery";

export const rtkQueryApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
});
