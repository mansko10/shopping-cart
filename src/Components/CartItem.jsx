import { useEffect, useState } from "react";

export default function CartItem({
  product,
  updateProductQuantity,
  removeFromCart,
}) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    if (quantity !== "") {
      updateProductQuantity(product, quantity);
    }
  }, [quantity]);

  function handleChange(e) {
    setQuantity(e.target.value === "" ? "" : +e.target.value);
  }

  function increaseQuantity() {
    if (quantity === "") {
      setQuantity(1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity === "") {
      setQuantity(1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="cart-item">
      <img src={product.image} alt="" />
      <p className="title">{product.title}</p>
      <p className="totalPrice">${+product.totalPrice.toFixed(2)}</p>
      <div className="modify-quantity">
        <button type="button" className="modify" onClick={decreaseQuantity}>
          -
        </button>
        <input type="number" value={quantity} onChange={handleChange} min={1} />
        <button type="button" className="modify" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button
        type="button"
        className="delete"
        onClick={() => removeFromCart(product)}
      >
        Remove
      </button>
    </div>
  );
}
