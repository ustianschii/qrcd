import { paths } from "~/routes/paths";

/**
 * Returns a valid hypertext reference, based on the mathched route config,
 * replacing all route and query parameters with passed values
 * @param route Route key
 * @param routeParams Route path parameters
 * @param queryParams Query string parameters
 */
export const buildPath = (
  route: keyof typeof paths,
  routeParams?: Record<string, string | number>,
  queryParams?: Record<string, string | number>,
) => {
  let path = paths[route];

  if (routeParams) {
    Object.entries(routeParams).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value.toString());
    });
  }

  if (queryParams) {
    path +=
      "?" +
      Object.entries(queryParams)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
  }

  return path;
};
