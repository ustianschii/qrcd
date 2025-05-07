import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { AppRouter } from "~/routes/components";
import { store } from "~/store";

describe("<AppRouter />", () => {
  it("should iterate through routes", () => {
    const mapSpy = vi.spyOn(Array.prototype, "map");

    render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
    );

    expect(mapSpy).toBeCalled();

    mapSpy.mockRestore();
  });
});
