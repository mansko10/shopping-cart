import styled from "styled-components";

const StyledCategory = styled.div`
  flex: 0 1 20%;
  display: flex;
  flex-direction: column;

  .active {
    color: green;
  }

  a {
    text-align: center;
    color: black;
    border-top: 1px solid black;
    font-size: 25px;
    padding: 10px 0;
    text-decoration: none;
  }
`;

export default StyledCategory;
