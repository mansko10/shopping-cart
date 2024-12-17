import { useOutletContext, useParams, useLocation } from "react-router-dom";
import StyledProduct from "./Styles/StyledProduct.styled";
import BreadCrumb from "./BreadCrumb";
import Rating from "./Rating";
import { useState } from "react";

export default function Product() {
  const { products, addToCart } = useOutletContext();
  const { id } = useParams();
  const location = useLocation();

  const product = products.find((product) => product.id.toString() === id);

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (quantity === "") {
      setQuantity(1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };
  const changeQuantity = (value) => {
    setQuantity(value === "" ? "" : +value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      title: product.title,
      quantity: +e.target.quantity.value,
      price: +product.price,
      totalPrice: +e.target.quantity.value * product.price,
      id: product.id,
      image: product.image,
    };

    addToCart(result);
    alert("Item added!");
  };

  return (
    <StyledProduct>
      <BreadCrumb pathname={location.pathname} />
      <div className="product">
        <div className="left">
          <img src={product.image} alt="" />
        </div>
        <div className="right">
          <div className="description">
            <h1>{product.title}</h1>
            <Rating rating={product.rating} />
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <button
                type="button"
                disabled={quantity <= 1 ? true : false}
                onClick={decreaseQuantity}
              >
                −
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={1}
                value={quantity === "" ? "" : quantity}
                onChange={(e) => changeQuantity(e.target.value)}
                required
              />
              <button type="button" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </div>
    </StyledProduct>
  );
}
