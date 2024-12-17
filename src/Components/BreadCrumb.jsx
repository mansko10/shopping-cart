import PropTypes from "prop-types";
import StyledBreadCrumb from "./Styles/StyledBreadCrumb";
import createBreadCrumb from "../Util/createBreadCrumb";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb({ pathname }) {
  const breadcrumbs = createBreadCrumb(pathname);
  return (
    <StyledBreadCrumb>
      {breadcrumbs.map((breadcrumb, index) => {
        if (index !== breadcrumbs.length - 1) {
          return (
            <Fragment key={index}>
              <Link to={breadcrumb.path}>
                {decodeURIComponent(breadcrumb.name)}
              </Link>
              <span>{">"}</span>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={index}>
              <Link to="" className="active">
                {decodeURIComponent(breadcrumb.name)}
              </Link>
            </Fragment>
          );
        }
      })}
    </StyledBreadCrumb>
  );
}

BreadCrumb.propTypes = {
  pathname: PropTypes.string,
};
