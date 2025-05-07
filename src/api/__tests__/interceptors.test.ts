import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import {
  onFulfilledRequest,
  onFulfilledResponse,
  onRejectedRequest,
  onRejectedResponse,
} from "~/api/interceptors";

vi.mock("~/modules/auth/utils", async (importOriginal) => {
  const original: object = await importOriginal();
  return {
    ...original,
    getAuthTokensFromLocalStorage: vi.fn(),
  };
});

describe("Axios interceptors", () => {
  const mockRequest = vi.fn();
  const mockPost = vi.fn();
  const mockedInstance = {
    request: mockRequest,
    post: mockPost,
  } as unknown as AxiosInstance;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fullfill a request", () => {
    const config = {
      baseURL: "/",
      headers: {
        set: vi.fn(),
      },
    } as unknown as InternalAxiosRequestConfig;
    expect(onFulfilledRequest(mockedInstance)(config)).toEqual(config);
  });

  it("should reject a request", async () => {
    const error = new AxiosError("Request error");
    await expect(onRejectedRequest(mockedInstance)(error)).rejects.toThrow(
      "Request error",
    );
  });

  it("should fulfill a response", () => {
    const response = {
      data: "test data",
    } as AxiosResponse;
    expect(onFulfilledResponse(mockedInstance)(response)).toEqual(response);
  });

  it("should reject a response", async () => {
    const error = new AxiosError("Response error");
    await expect(onRejectedResponse(mockedInstance)(error)).rejects.toThrow(
      "Response error",
    );
  });
});
