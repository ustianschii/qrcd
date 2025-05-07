import { className } from "~/utils";

describe("String utils", () => {
  it("className returns a valid class string", () => {
    const args = [
      "class1",
      "class2",
      {
        class3: false,
        class4: true,
      },
    ];
    const expected = "class1 class2 class4";
    expect(className(...args)).toEqual(expected);
  });
});
