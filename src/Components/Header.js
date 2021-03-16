import Button from '@material-ui/core/Button';
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
          <h4>Aircnc</h4>
      </div>
      <nav>
          <ul>
              <li><NavLink to="/">Host your home</NavLink></li>
              <li><NavLink to="/">Host your ecperiance</NavLink></li>
              <li><NavLink to="/">Help</NavLink></li>
              <li><NavLink to="/">Login</NavLink></li>
              <Button>Sign up</Button>
          </ul>
      </nav>
    </div>
  );
}

export default Header;
