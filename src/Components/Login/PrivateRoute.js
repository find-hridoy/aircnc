import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
  // get data from redux
  const loggedInUser = useSelector((res) => res.addUser);
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser && loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
}

export default PrivateRoute;
