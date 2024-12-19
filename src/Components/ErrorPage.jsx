import StyledErrorPage from "./Styles/StyledErrorPage";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <StyledErrorPage>
      <h1>This page doesn't exist</h1>
      <Link to="/">Go back to shop</Link>
    </StyledErrorPage>
  );
}
