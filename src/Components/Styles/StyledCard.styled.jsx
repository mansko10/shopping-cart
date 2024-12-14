import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  flex: 0 1 auto;
  cursor: pointer;
  padding-bottom: 5px;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-div {
    color: black;
  }

  &:hover .title-div {
    color: #854e57;
  }

  img {
    background-size: cover;
    width: 150px;
    height: 175px;
  }

  .title-div {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title-div p {
    margin: 0;
    padding: 5px 10px;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical; */
  }

  .price {
    font-size: 18px;
    color: purple;
    margin: 0;
    align-self: flex-start;
    padding: 5px;
  }

  .rating {
    padding: 0 5px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    color: black;
    gap: 5px;
  }

  .rating p {
    margin: 0;
  }
`;

export default StyledCard;
