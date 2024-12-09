import StyledHome from "./Styles/StyledHome.styled";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledHome>
      <h1>Welcome to our shop!</h1>
      <Link to="/shop">Start Shopping</Link>
    </StyledHome>
  );
}
