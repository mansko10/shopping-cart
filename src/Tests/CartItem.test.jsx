import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../Components/CartItem";

describe("CartItem.jsx", () => {
  const cartProduct = {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    quantity: 2,
    price: 22.3,
    totalPrice: 44.6,
    id: 2,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  };

  it("Renders Cartitem.jsx correctly", () => {
    const updateProductQuantity = vi.fn();
    const removeFromCart = vi.fn();

    const { container } = render(
      <CartItem
        product={cartProduct}
        updateProductQuantity={updateProductQuantity}
        removeFromCart={removeFromCart}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("Should call updateProductQuantity function when '+' is clicked", async () => {
    const user = userEvent.setup();

    const updateProductQuantity = vi.fn();
    const removeFromCart = vi.fn();

    render(
      <CartItem
        product={cartProduct}
        updateProductQuantity={updateProductQuantity}
        removeFromCart={removeFromCart}
      />,
    );

    const increment = screen.getByRole("button", { name: "+" });

    await user.click(increment);

    expect(updateProductQuantity).toHaveBeenCalled();
  });

  it("Should call updateProductQuantity function when '-' button is clicked", async () => {
    const user = userEvent.setup();

    const updateProductQuantity = vi.fn();
    const removeFromCart = vi.fn();

    render(
      <CartItem
        product={cartProduct}
        updateProductQuantity={updateProductQuantity}
        removeFromCart={removeFromCart}
      />,
    );

    const decrement = screen.getByRole("button", { name: "-" });

    await user.click(decrement);

    expect(updateProductQuantity).toHaveBeenCalled();
  });

  it("Should call removeFromCart function when 'remove' button is clicked", async () => {
    const user = userEvent.setup();

    const updateProductQuantity = vi.fn();
    const removeFromCart = vi.fn();

    render(
      <CartItem
        product={cartProduct}
        updateProductQuantity={updateProductQuantity}
        removeFromCart={removeFromCart}
      />,
    );

    const remove = screen.getByRole("button", { name: "Remove" });

    await user.click(remove);

    expect(removeFromCart).toHaveBeenCalled();
  });
});
