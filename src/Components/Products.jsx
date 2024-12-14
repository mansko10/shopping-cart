import { useOutletContext, useParams } from "react-router-dom";
import Card from "./Card";
import CapFirstLetter from "../Util/CapFirstLetter";
import StyledProducts from "./Styles/StyledProducts.styled";

export default function Products() {
  const { products } = useOutletContext();
  const { category } = useParams();

  const filtered = products.filter((product) => product.category === category);

  return (
    <>
      <StyledProducts>
        <h1>{CapFirstLetter(category)}</h1>
        <div className="productsList">
          {filtered.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </StyledProducts>
    </>
  );
}
