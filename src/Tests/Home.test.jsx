import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../Components/Home";
import { BrowserRouter } from "react-router-dom";

it("Renders Home.jsx correctly", () => {
  const { container } = render(<Home />, { wrapper: BrowserRouter });

  expect(container).toMatchSnapshot();
});
