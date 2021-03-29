import { Button } from "@material-ui/core";
import React from "react";
import Modal from "react-awesome-modal";
import { NavLink } from "react-router-dom";

function LoginModal({ closeModal, isOpen }) {
  return (
    <div>
      {/* <input type="button" value="Open" onClick={openModal} /> */}
      <Modal visible={isOpen} width="400" height="350" effect="fadeInDown">
        <div className="loginModal__form">
          <h2>Login</h2>
          <Button onClick={closeModal}>Continue with Google</Button>
          <p>
            Don't have an account?{" "}
            <NavLink to="signup">Create an account</NavLink>{" "}
          </p>
        </div>
      </Modal>
    </div>
  );
}
export default LoginModal;
