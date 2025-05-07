import { customRender, testIds } from "~/utils";

import GlobalLoader from "./GlobalLoader";

describe("<GlobalLoader />", () => {
  it("should render", () => {
    const { getByTestId } = customRender(<GlobalLoader />);
    expect(getByTestId(testIds.components.globalLoader)).toBeInTheDocument();
  });
});
