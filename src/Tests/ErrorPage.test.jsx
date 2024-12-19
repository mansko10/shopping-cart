import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";

it("Renders ErrorPage.jsx correctly", () => {
  const { container } = render(<ErrorPage />, { wrapper: BrowserRouter });

  expect(container).toMatchSnapshot();
});
