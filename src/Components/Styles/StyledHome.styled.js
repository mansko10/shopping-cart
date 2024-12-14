import styled from "styled-components";

const StyledHome = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 50px 0;
  min-height: calc(100vh - 48px);
  background-color: #d3edd9;

  h1 {
    color: #483d8b;
    font-size: 64px;
    cursor: default;
  }

  a {
    display: inline-block;
    font-size: 32px;
    font-weight: lighter;
    text-decoration: none;
    background-color: #483d8b;
    color: white;
    padding: 5px 10px;
    transition: 0.3s;
    user-select: none;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export default StyledHome;
