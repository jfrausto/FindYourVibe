import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// brackets are wrapper for current route
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  if (currentUser) { console.log(currentUser.email) }
  return (
    <Route
      {...rest}
      render={(props) => {
        return (currentUser != null) ? <Component {...props} /> : <Redirect to="/login" />
        // return true ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  );
}
