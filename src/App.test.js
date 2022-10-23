import { render } from "@testing-library/react";
import App from "./App";

describe("app component", () => {
  it("render without crushing", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeTruthy();
  });
});
