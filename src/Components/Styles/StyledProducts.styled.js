import styled from "styled-components";

const StyledProducts = styled.div`
  flex: 0 1 80%;

  h1 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .productsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, 170px);
    justify-content: space-around;
    gap: 20px;
  }
`;

export default StyledProducts;
