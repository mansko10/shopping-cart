import { NavLink, Outlet, useNavigate } from "react-router-dom";
import GlobalStyles from "./Styles/Global";
import StyledNav from "./Styles/StyledNav.styled";
import { useEffect, useState } from "react";

export default function App() {
  const [something, setSomething] = useState(0);
  const navigate = useNavigate();

  function increment() {
    setSomething(something + 1);
  }

  function decrement() {
    setSomething(something - 1);
  }

  useEffect(() => {
    navigate("home");
  }, []);

  return (
    <>
      <GlobalStyles />
      <StyledNav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="cart">Cart</NavLink>
      </StyledNav>
      <Outlet context={{ something, increment, decrement }} />
    </>
  );
}
