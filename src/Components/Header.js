import Button from "@material-ui/core/Button";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__logo">
          <h4>Aircnc</h4>
        </div>
        <nav>
          <ul>
            <li>
              <Button>
                <NavLink to="/">Host your home</NavLink>
              </Button>
            </li>
            <li>
              <Button>
                <NavLink to="/">Host your ecperiance</NavLink>
              </Button>
            </li>
            <li>
              <Button>
                <NavLink to="/">Help</NavLink>
              </Button>
            </li>
            <li>
              <Button>
                <NavLink to="/">Login</NavLink>
              </Button>
            </li>
            <div className="signup__button">
              <Button>Sign up</Button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
