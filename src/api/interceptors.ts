import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type OnFulfilledRequest = (
  instance: AxiosInstance,
) => (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;

type OnRejectedRequest = (
  instance: AxiosInstance,
) => (error: AxiosError) => Promise<never>;

type OnFulfilledResponse = (
  instance: AxiosInstance,
) => (response: AxiosResponse) => AxiosResponse;

type OnRejectedResponse = (
  instance: AxiosInstance,
) => (error: AxiosError) => Promise<never>;

export const onFulfilledRequest: OnFulfilledRequest = () => (config) => {
  return config;
};

export const onRejectedRequest: OnRejectedRequest = () => (error) => {
  return Promise.reject(error);
};

export const onFulfilledResponse: OnFulfilledResponse = () => (response) => {
  return response;
};

export const onRejectedResponse: OnRejectedResponse = () => (error) => {
  return Promise.reject(error);
};
