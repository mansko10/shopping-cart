import { useOutletContext, useParams } from "react-router-dom";
import Card from "./Card";
import CapFirstLetter from "../Util/CapFirstLetter";
import StyledProducts from "./Styles/StyledProducts.styled";

export default function AllProducts() {
  const { category } = useParams();
  const { products } = useOutletContext();

  let displayedProducts = null;

  if (!category) {
    displayedProducts = products;
  } else {
    displayedProducts = products.filter(
      (product) => product.category === category,
    );
  }

  return (
    <>
      <StyledProducts>
        <h1>{!category ? "All" : CapFirstLetter(category)}</h1>
        <div className="productsList">
          {displayedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </StyledProducts>
    </>
  );
}
