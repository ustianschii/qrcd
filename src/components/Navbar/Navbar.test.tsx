import { customRender } from "~/utils";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("should mount", () => {
    const { getByText } = customRender(<Navbar />);
    expect(getByText("Navbar")).toBeInTheDocument();
  });
});
