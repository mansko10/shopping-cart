import styled from "styled-components";

const StyledCart = styled.div`
  min-height: calc(100vh - 106px);
  padding: 1px;
  h1 {
    text-align: center;
    text-decoration: underline;
  }

  .clear-cart {
    display: block;
    margin: 10px auto;
    padding: 5px 10px;

    background-color: darkred;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    font-size: 20px;
  }

  .cart-item img {
    width: 100px;
    height: 120px;
  }

  .cart {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .cart-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid black;
    margin: 10px 0;
  }

  .cart-item .title {
    width: 200px;
  }

  .cart-item .totalPrice {
    width: 60px;
    text-align: right;
  }

  .cart-item input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .cart-item input[type="number"] {
    -moz-appearance: textfield;
  }

  .cart-item input {
    width: 40px;
    text-align: center;
    font-size: 20px;
    margin: 0 5px;
  }

  .cart-item .modify[type="button"] {
    background-color: #3381c4;
    color: white;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid black;
    font-size: 20px;
  }

  .cart-item .delete[type="button"] {
    background-color: darkred;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    padding: 5px 10px;
  }

  .combined-total {
    font-size: 25px;
    text-align: center;
    text-decoration: underline;
  }

  .checkout {
    display: block;
    margin: 10px auto;
    background-color: #483d8b;
    color: white;
    border: none;
    font-size: 25px;
    padding: 10px 15px;
    cursor: pointer;
    transition: 300ms;
  }

  .checkout:hover {
    transform: scale(1.035);
  }
`;

export default StyledCart;
