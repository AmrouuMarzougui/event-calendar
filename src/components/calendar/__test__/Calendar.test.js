import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Calendar } from "../Calendar";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("render without crushing", () => {
  const { getByTestId } = render(<Calendar />);
  expect(getByTestId("calendar")).toBeTruthy();
});

it("should render time", async () => {
  render(<Calendar />);
  expect(screen.getByText("09:00")).toBeInTheDocument();
});

it("it matches snapshots", () => {
  const { tree } = renderer.create(<Calendar />).toJSON();
  expect(tree).toMatchSnapshot();
});
