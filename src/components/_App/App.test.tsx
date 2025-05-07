import { render } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("should mount", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
