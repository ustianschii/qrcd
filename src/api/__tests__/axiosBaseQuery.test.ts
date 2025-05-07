import { Mock } from "vitest";
import { AxiosError } from "axios";

import { axiosInstance } from "~/api/axios";
import { axiosBaseQuery } from "~/api/axiosBaseQuery";
import { serializeAxiosError } from "~/utils";

vi.mock("~/api/axios", () => ({
  axiosInstance: vi.fn(),
}));

vi.mock("~/utils/axiosUtils", () => ({
  serializeAxiosError: vi.fn(),
}));

describe("Axios base query", () => {
  it("should return data on success", async () => {
    const mockedResponse = {
      data: "Data",
      status: 200,
    };

    (axiosInstance as unknown as Mock).mockResolvedValue(mockedResponse);

    const actual = await axiosBaseQuery({}, null as any, {});
    const expected = {
      data: mockedResponse.data,
      meta: { status: mockedResponse.status },
    };

    expect(actual).toEqual(expected);
  });

  it("should return error on failure", async () => {
    const error = new AxiosError();

    (axiosInstance as unknown as Mock).mockRejectedValue(error);
    (serializeAxiosError as unknown as Mock).mockReturnValue(error);

    const actual = await axiosBaseQuery({}, null as any, {});
    const expected = { error, meta: error };

    expect(actual).toEqual(expected);
  });
});
