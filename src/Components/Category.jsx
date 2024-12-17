import PropTypes from "prop-types";
import StyledCategory from "./Styles/StyledCategory.styled";
import { NavLink } from "react-router-dom";
import CapFirstLetter from "../Util/CapFirstLetter";

export default function Category({ products }) {
  const categoryNames = [];

  products.forEach((product) => {
    if (!categoryNames.includes(product.category)) {
      categoryNames.push(product.category);
    }
  });

  const categoryList = categoryNames.map((categoryName) => {
    return {
      categoryName: categoryName,
      categoryNameID: crypto.randomUUID(),
    };
  });

  return (
    <>
      <StyledCategory>
        <NavLink to="" end>
          All
        </NavLink>
        {categoryList.map((categoryName) => (
          <NavLink
            key={categoryName.categoryNameID}
            to={categoryName.categoryName}
          >
            {CapFirstLetter(categoryName.categoryName)}
          </NavLink>
        ))}
      </StyledCategory>
    </>
  );
}

Category.propTypes = {
  products: PropTypes.array,
};
