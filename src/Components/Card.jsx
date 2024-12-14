import { Link, useParams } from "react-router-dom";
import StyledCard from "./Styles/StyledCard.styled";
import Rating from "./Rating";

export default function Card({ product }) {
  const { category } = useParams();
  return (
    <>
      <StyledCard>
        <Link
          to={
            category
              ? product.id.toString()
              : `${product.category}/${product.id}`
          }
        >
          <img src={product.image} alt="" />
          <div className="title-div">
            <p>{product.title}</p>
          </div>
          <p className="price">${product.price}</p>
          <Rating rating={product.rating} />
        </Link>
      </StyledCard>
    </>
  );
}
