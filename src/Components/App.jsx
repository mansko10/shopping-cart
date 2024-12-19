import { NavLink, Outlet, useLocation } from "react-router-dom";
import GlobalStyles from "./Styles/Global";
import StyledNav from "./Styles/StyledNav.styled";
import StyledApp from "./Styles/StyledApp";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import Footer from "./Footer";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const includesProduct = cart.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (!includesProduct) {
      setCart([...cart, product]);
    } else if (includesProduct) {
      const newCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
            totalPrice: cartProduct.totalPrice + product.totalPrice,
          };
        } else {
          return cartProduct;
        }
      });
      setCart(newCart);
    }
  }

  function removeFromCart(product) {
    const newCart = cart.filter((cartProduct) => cartProduct.id !== product.id);

    setCart(newCart);
  }

  function updateProductQuantity(product, quantity) {
    const result = cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return {
          ...cartProduct,
          quantity: quantity,
          totalPrice: product.price * quantity,
        };
      } else {
        return { ...cartProduct };
      }
    });

    setCart(result);
  }

  function clearCart() {
    setCart([]);
  }

  function getCartQuantity() {
    let result = 0;

    cart.forEach((product) => {
      result += product.quantity;
    });

    return result;
  }

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">
            <div className="cart-icon">
              <ShoppingCart />
              <span>{getCartQuantity()}</span>
            </div>
          </NavLink>
        </StyledNav>
        <Outlet
          context={{
            cart: cart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            updateProductQuantity: updateProductQuantity,
            clearCart: clearCart,
          }}
        />
        <Footer />
      </StyledApp>
    </>
  );
}
