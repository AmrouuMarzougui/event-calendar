import React from "react";
import { Event } from "../Event";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("render without crushing", () => {
  const { getByTestId } = render(<Event id={11} />);
  expect(getByTestId("event-input")).toBeTruthy();
});

it("render with the right content", () => {
  const { getByTestId } = render(<Event id={11} />);
  expect(getByTestId("event-input")).toHaveTextContent("11");
});

it("it matches snapshots", () => {
  const { tree } = renderer
    .create(<Event id={11} gridRow={"1 / 12"} gridColumn={"2 / 3"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
