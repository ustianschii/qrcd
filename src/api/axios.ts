import axios from "axios";

import { API_BASE_URL } from "~/config/constants";

import {
  onFulfilledRequest,
  onFulfilledResponse,
  onRejectedRequest,
  onRejectedResponse,
} from "./interceptors";

export const createAxiosInstance = (baseURL: string = API_BASE_URL) => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    onFulfilledRequest(instance),
    onRejectedRequest(instance),
  );

  instance.interceptors.response.use(
    onFulfilledResponse(instance),
    onRejectedResponse(instance),
  );

  return instance;
};

export const axiosInstance = createAxiosInstance();
