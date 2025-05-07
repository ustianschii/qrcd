import { customRender } from "~/utils";

import DefaultLayout from "./DefaultLayout";

describe("<DefaultLayout />", () => {
  it("should mount", () => {
    const content = "Text";
    const { getByText } = customRender(
      <DefaultLayout>{content}</DefaultLayout>,
    );
    expect(getByText(content)).toBeInTheDocument();
  });
});
