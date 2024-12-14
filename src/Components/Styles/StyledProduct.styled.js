import styled from "styled-components";

const StyledProduct = styled.div`
  flex: 0 1 80%;

  padding: 0 10px;

  img {
    width: 200px;
    height: 250px;
  }

  h1,
  p {
    margin: 0;
  }

  .product {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .product > div {
  }

  .price {
    margin: 10px 0;
    font-size: 26px;
  }

  .description {
    margin: 10px 0;
  }
`;

export default StyledProduct;
