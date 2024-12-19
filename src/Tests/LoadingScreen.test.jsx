import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoadingScreen from "../Components/LoadingScreen";

it("Renders LoadingScreen.jsx correctly", () => {
  const { container } = render(<LoadingScreen />);

  expect(container).toMatchSnapshot();
});
