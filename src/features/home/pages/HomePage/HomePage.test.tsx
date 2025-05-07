import { customRender } from "~/utils";

import HomePage from "./HomePage";

describe("<HomePage />", () => {
  it("should mount", () => {
    const { getByText } = customRender(<HomePage />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
