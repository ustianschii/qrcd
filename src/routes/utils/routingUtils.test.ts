import { buildPath } from "~/routes/utils";
import { paths } from "~/routes/paths";

describe("Routing utils", () => {
  it("buildPath returns a valid url with query parameters", () => {
    const actual = buildPath("Dashboard", { id: 1 }, { q: "param" });
    const expected = `${paths.Dashboard}?q=param`;
    expect(actual).toEqual(expected);
  });
});
