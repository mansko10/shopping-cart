import { describe, vi, expect, it } from "vitest";
import Cart from "../Components/Cart";
import { render, screen } from "@testing-library/react";
import { RenderContext } from "./RenderContext";

describe("Renders Cart correctly", () => {
  it("Renders correctly when cart includes items", () => {
    const dummy = {
      cart: [
        {
          title: "Mens Cotton Jacket",
          quantity: 2,
          price: 55.99,
          totalPrice: 111.98,
          id: 3,
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
      ],
      updateProductQuantity: vi.fn(),
    };

    const { container } = render(
      <RenderContext context={dummy}>
        <Cart />
      </RenderContext>,
    );

    expect(screen.getByText("Mens Cotton Jacket")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("Renders correctly when cart is empty", () => {
    const dummy = {
      cart: [],
      updateProductQuantity: vi.fn(),
    };

    const { container } = render(
      <RenderContext context={dummy}>
        <Cart />
      </RenderContext>,
    );

    expect(screen.getByText("Cart is Empty")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
