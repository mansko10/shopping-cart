import { useProducts } from "../CustomHooks/useProducts";
import LoadingScreen from "./LoadingScreen";
import Category from "./Category";
import StyledShop from "./Styles/StyledShop.styled";
import { Outlet } from "react-router-dom";

export default function Shop() {
  const { products, error, loading } = useProducts();

  console.log(products);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <>
        <div>Sorry, there was an error.</div>
      </>
    );
  }

  return (
    <>
      <StyledShop>
        <Category products={products} />
        <Outlet context={{ products }} />
      </StyledShop>
    </>
  );
}
