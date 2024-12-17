import StyledCart from "./Styles/StyledCart";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";
import { Fragment } from "react";

export default function Cart() {
  const { cart, updateProductQuantity, removeFromCart, clearCart } =
    useOutletContext();

  function getCombinedTotal() {
    let result = 0;

    cart.forEach((p) => (result += p.totalPrice));

    return +result.toFixed(2);
  }

  return (
    <StyledCart>
      <h1>Cart:</h1>
      <button type="button" className="clear-cart" onClick={clearCart}>
        Clear Cart
      </button>
      <div className="cart">
        {cart.length ? (
          <>
            {cart.map((cartProduct) => {
              return (
                <Fragment key={cartProduct.id}>
                  <CartItem
                    product={cartProduct}
                    updateProductQuantity={updateProductQuantity}
                    removeFromCart={removeFromCart}
                  />
                </Fragment>
              );
            })}
            <p className="combined-total">Total: ${getCombinedTotal()}</p>
            <button type="button" className="checkout">
              Proceed to Checkout
            </button>
          </>
        ) : (
          <p style={{ textAlign: "center" }}>Cart is Empty</p>
        )}
      </div>
    </StyledCart>
  );
}
