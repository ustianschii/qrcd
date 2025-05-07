import { customRender } from "~/utils";

import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("should render", () => {
    const { getByText } = customRender(<NotFound />);
    expect(getByText("errorPages.title.404")).toBeInTheDocument();
  });
});
