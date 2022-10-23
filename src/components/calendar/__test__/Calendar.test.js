import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Calendar } from "../Calendar";
afterEach(cleanup);

it("render without crushing", () => {
  const { getByTestId } = render(<Calendar />);
  expect(getByTestId("calendar")).toBeTruthy();
});
