import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useUserContext } from "../contexts/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useUserContext();

  return (
    <Route
      render={() => {
        console.log("privete route, redicect if logged in");
        return currentUser ? <Redirect to="/" /> : children;
      }}
      {...rest}
    ></Route>
  );
};

export default PrivateRoute;
