function addToCart(product, cart, setCart) {
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

function getCartQuantity(cart) {
  let result = 0;

  cart.forEach((product) => {
    result += product.quantity;
  });

  return result;
}

export { addToCart, getCartQuantity };
