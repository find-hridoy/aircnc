import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginModal from "../Pages/LoginModal";

function Header() {
  const [data, setdata] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  // get data from redux
  const result = useSelector((res) => res.data);
  useEffect(() => {
    result.map((res) => setdata(res));
  }, [result]);
  const { locationName, guestCount, checkIn, checkOut } = data;
  // modal function
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__logo">
          <h4>Aircnc</h4>
        </div>
        {(window.location.pathname === "/result" ||
          window.location.pathname === "/details") && (
          <div className="header__search_result">
            <li>{locationName}</li>
            <li>
              <Moment format="MMM DD">{checkIn}</Moment>-
              <Moment format="DD">{checkOut}</Moment>
            </li>
            <li>{guestCount} Guests</li>
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

            <div className="logout__button">
              <Avatar
                alt="A"
                src="https://images.pexels.com/photos/3771811/pexels-photo-3771811.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3771811.jpg&fm=jpg"
              />
              <Button>Login Out</Button>
            </div>
            <div className="login__button">
              <Button onClick={openModal}>Login</Button>
            </div>
            <div className="signup__button">
              <Button onClick={openModal}>Sign up</Button>
            </div>
          </ul>
        </nav>
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default Header;
