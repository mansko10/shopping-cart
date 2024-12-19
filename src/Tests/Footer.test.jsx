import Footer from "../Components/Footer";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";

it("Renders Footer.jsx correctly", () => {
  const { container } = render(Footer);

  expect(container).toMatchSnapshot();
});
