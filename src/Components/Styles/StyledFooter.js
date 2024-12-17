import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 15px 15px;
  background-color: #483d8b;
  display: flex;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 21px;
    display: block;
    transition: 400ms;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  a:hover {
    transform: translateY(-5px);
  }
`;

export default StyledFooter;
