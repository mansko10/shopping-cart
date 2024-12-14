import { useOutletContext, useParams, useLocation } from "react-router-dom";
import StyledProduct from "./Styles/StyledProduct.styled";
import BreadCrumb from "./BreadCrumb";
import Rating from "./Rating";

export default function Product() {
  const { products } = useOutletContext();
  const { id } = useParams();
  const location = useLocation();

  const product = products.find((product) => product.id.toString() === id);

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
          <form>
            <div>
              <button type="button">−</button>
              <input type="number" id="quantity" name="quantity" min="1" />
              <button type="button">+</button>
            </div>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </div>
    </StyledProduct>
  );
}
