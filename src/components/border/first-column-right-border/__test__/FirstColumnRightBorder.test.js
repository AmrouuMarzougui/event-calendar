import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { FirstColumnRightBorder } from "../FirstColumnRightBorder";

describe("app component", () => {
  afterEach(cleanup);

  it("render without crushing", () => {
    const { getByTestId } = render(<FirstColumnRightBorder index={5} />);
    expect(getByTestId("first-column-right-border")).toBeTruthy();
  });

  it("it matches snapshots", () => {
    const { tree } = renderer
      .create(<FirstColumnRightBorder index={5} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
