import styled from "styled-components";

// Credits https://css-loaders.com/spinner/
const StyledNav = styled.nav`
  background-color: #483d8b;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    font-size: 20px;
  }

  .active {
    background-color: white;
    color: black;
    transition: 0.5s;
  }

  .active .cart-icon span {
    color: black;
  }

  .cart-icon {
    position: relative;
    padding-top: 2px;
  }

  .cart-icon span {
    font-size: 12px;
    position: absolute;
    top: -6px;
    right: -5px;
    color: yellow;
  }
`;

export default StyledNav;
