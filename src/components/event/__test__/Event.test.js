import React from "react";
import { Event } from "../Event";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("render without crushing", () => {
  const { getByTestId } = render(
    <Event
      event={{
        id: 11,
        start: "19:00",
        duration: 60,
      }}
      height={60}
      marginTop={60}
      id={1}
      key={1}
    />
  );
  expect(getByTestId("event-input")).toHaveTextContent("11");
});

it("render have the be truthy", () => {
  const { getByTestId } = render(
    <Event
      event={{
        id: 11,
        start: "19:00",
        duration: 60,
      }}
      height={60}
      marginTop={60}
      id={1}
      key={1}
    />
  );
  expect(getByTestId("event-input")).toBeTruthy();
});
