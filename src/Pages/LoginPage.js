import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  googleSignIn,
  initializeFramework,
} from "../Components/Login/LoginManeger";
import { useDispatch } from "react-redux";
import { addUserData } from "./../Redux/actions/dataAction";
import { useHistory, useLocation } from "react-router";

function LoginPage() {
  const dispatch = useDispatch();
  //Private Route element
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // Initialize
  initializeFramework();
  //Google SignIn function
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const { email, displayName, photoURL } = res;
        const userDetails = {
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        };
        dispatch(addUserData(userDetails));
        history.replace(from);
      })
      .catch((err) => {
        dispatch(addUserData(err));
      });
  };

  return (
    <div className="loginPage">
      <div className="loginPage__form">
        <h2>Login</h2>
        <Button onClick={handleGoogleSignIn}>Continue with Google</Button>
        <p>
          Don't have an account? <NavLink to="login">Create an account</NavLink>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
