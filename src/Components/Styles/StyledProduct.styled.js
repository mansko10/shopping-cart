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

  form input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  form input[type="number"] {
    -moz-appearance: textfield;
  }

  form input {
    width: 40px;
    text-align: center;
    font-size: 20px;
  }

  form div {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }

  form button[type="button"] {
    background-color: #3381c4;
    color: white;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid black;
    font-size: 20px;
  }

  form button[type="submit"] {
    background-color: #483d8b;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default StyledProduct;
