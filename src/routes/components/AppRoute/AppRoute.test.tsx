import { PropsWithChildren } from "react";

import { customRender } from "~/utils";

import AppRoute from "./AppRoute";

describe("<AppRoute />", () => {
  const testId = "component";
  const component = () => <div data-testid={testId} />;

  it("should wrap component with default layout", () => {
    const { getByTestId } = customRender(<AppRoute route={{ component }} />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it("should wrap component with custom layout", () => {
    const layoutContent = "Custom Layout";
    const { getByText } = customRender(
      <AppRoute
        route={{
          component,
          layout: ({ children }: PropsWithChildren) => (
            <>
              <div>{layoutContent}</div>
              <div>{children}</div>
            </>
          ),
        }}
      />,
    );

    expect(getByText(layoutContent)).toBeInTheDocument();
  });

  it("should render component without a layout", () => {
    const { container } = customRender(
      <AppRoute route={{ component, layout: null }} />,
    );

    expect(container.children[0].getAttribute("data-testid")).toEqual(testId);
  });
});
