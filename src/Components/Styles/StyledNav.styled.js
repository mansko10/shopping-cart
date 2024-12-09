import styled from "styled-components";

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

  .active:hover {
    background-color: white;
    color: black;
  }
`;

export default StyledNav;
