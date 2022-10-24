import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { FirstColumnBottomBorder } from "../FirstColumnBottomBorder";

describe("app component", () => {
  afterEach(cleanup);

  it("render without crushing", () => {
    const { getByTestId } = render(<FirstColumnBottomBorder index={5} />);
    expect(getByTestId("first-column-bottom-border")).toBeTruthy();
  });

  it("it matches snapshots", () => {
    const { tree } = renderer
      .create(<FirstColumnBottomBorder index={5} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
