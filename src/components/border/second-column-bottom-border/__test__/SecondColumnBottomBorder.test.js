import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { SecondColumnBottomBorder } from "../SecondColumnBottomBorder";

describe("app component", () => {
  afterEach(cleanup);

  it("render without crushing", () => {
    const { getByTestId } = render(<SecondColumnBottomBorder index={5} />);
    expect(getByTestId("second-column-bottom-border")).toBeTruthy();
  });

  it("it matches snapshots", () => {
    const { tree } = renderer
      .create(<SecondColumnBottomBorder index={5} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
