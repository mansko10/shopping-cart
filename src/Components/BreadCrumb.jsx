import StyledBreadCrumb from "./Styles/StyledBreadCrumb";
import createBreadCrumb from "../Util/createBreadCrumb";
import { Link } from "react-router-dom";

export default function BreadCrumb({ pathname }) {
  const breadcrumbs = createBreadCrumb(pathname);
  return (
    <StyledBreadCrumb>
      {breadcrumbs.map((breadcrumb, index) => {
        if (index !== breadcrumbs.length - 1) {
          return (
            <>
              <Link to={breadcrumb.path} key={index}>
                {decodeURIComponent(breadcrumb.name)}
              </Link>
              <span>{">"}</span>
            </>
          );
        } else {
          return (
            <>
              <Link to="" key={index} className="active">
                {decodeURIComponent(breadcrumb.name)}
              </Link>
            </>
          );
        }
      })}
    </StyledBreadCrumb>
  );
}
