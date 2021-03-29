import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__logo">
          <h4>Aircnc</h4>
        </div>
        {(window.location.pathname === "/result" ||
          window.location.pathname === "/details") && (
          <div className="header__search_result">
            <li>Dhaka Division, Bangladesh</li>
            <li>Apr 13-17</li>
            <li>3 Guests</li>
            <SearchIcon />
          </div>
        )}
        <nav>
          <ul>
            {window.location.pathname === "/" && (
              <div className="header__condition_nav">
                <li>
                  <Button>
                    <NavLink exact to="/">
                      Host your home
                    </NavLink>
                  </Button>
                </li>
                <li>
                  <Button>
                    <NavLink exact to="/">
                      Host your ecperiance
                    </NavLink>
                  </Button>
                </li>
              </div>
            )}
            <li>
              <Button>
                <NavLink exact to="/">
                  Help
                </NavLink>
              </Button>
            </li>
            <li>
              <Button>
                <NavLink exact to="/">
                  Login
                </NavLink>
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
