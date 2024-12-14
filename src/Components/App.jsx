import { NavLink, Outlet } from "react-router-dom";
import GlobalStyles from "./Styles/Global";
import StyledNav from "./Styles/StyledNav.styled";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="cart">Cart</NavLink>
      </StyledNav>
      <Outlet />
    </>
  );
}
