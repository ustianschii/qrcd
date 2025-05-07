import { axiosInstance } from "~/api/axios";
import { API_BASE_URL } from "~/config/constants";

describe("Axios", () => {
  it("instance should have correct baseURL", () => {
    expect(axiosInstance.defaults.baseURL).toBe(API_BASE_URL);
  });
});
