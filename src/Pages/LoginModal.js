import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import {
  googleSignIn,
  initializeFramework,
} from "../Components/Login/LoginManeger";

Modal.setAppElement("#root");
function LoginModal({ isOpen, closeModal }) {
  //Context use
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //Private Route element
  // let history = useHistory();
  // let location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };
  // Initialize
  initializeFramework();
  //Google SignIn function
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        // const {email, displayName, photoURL} = res;
        // setLoggedInUser(res);
        // history.replace(from);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        // setLoggedInUser(err);
      });
  };
  return (
    <>
      <Modal isOpen={isOpen} contentLabel="Example Modal">
        <div className="loginModal__icon">
          <div></div>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="loginModal__form">
          <h2>Login</h2>
          <Button onClick={handleGoogleSignIn}>Continue with Google</Button>
          <p>
            Don't have an account?{" "}
            <NavLink to="signup">Create an account</NavLink>
          </p>
        </div>
      </Modal>
    </>
  );
}
export default LoginModal;
