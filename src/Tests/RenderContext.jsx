// Credits: https://stackoverflow.com/questions/70507413/react-router-useoutletcontext-testing

import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import PropTypes, { any } from "prop-types";

export const RenderContext = ({ context, children }) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

RenderContext.propTypes = {
  context: PropTypes.any,
  children: PropTypes.any,
};
