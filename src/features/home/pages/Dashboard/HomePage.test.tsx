import { customRender } from "~/utils";

import HomePage from "./Dashboard";

describe("<HomePage />", () => {
  it("should mount", () => {
    const { getByText } = customRender(<HomePage />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
