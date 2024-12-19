import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";

describe("Renders BreadCrumb.jsx correctly", () => {
  it("Renders shop breadcrumb correctly", () => {
    const { container } = render(<BreadCrumb pathname="/shop" />, {
      wrapper: BrowserRouter,
    });

    expect(container).toMatchSnapshot();
  });

  it("Renders 'shop/mens' clothing' correctly", () => {
    const { container } = render(
      <BreadCrumb pathname="/shop/men's%20clothing" />,
      {
        wrapper: BrowserRouter,
      },
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders 'shops/men's clothing/1 correctly", () => {
    const { container } = render(
      <BreadCrumb pathname="/shop/men's%20clothing/1" />,
      {
        wrapper: BrowserRouter,
      },
    );

    expect(container).toMatchSnapshot();
  });
});
