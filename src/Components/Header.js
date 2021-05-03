import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { addUserData } from "./../Redux/actions/dataAction";

function Header() {
  const dispatch = useDispatch();
  // get data from redux
  const results = useSelector((res) => res.data);
  const loggedInUser = useSelector((res) => res.addUser);
  const { locationName, guestCount, checkIn, checkOut } = results;
  const { id } = useParams();
  const history = useHistory();
  const handleRoute = () => {
    history.push("/login");
  };
  const userLogOut = () => {
    dispatch(addUserData([]));
  };
  const handleHomeRoute = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__logo" onClick={handleHomeRoute}>
          <h4>Aircnc</h4>
        </div>
        {(window.location.pathname === "/result" ||
          window.location.pathname === `/details/${id}`) && (
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
                      Host your experiance
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
            {loggedInUser && loggedInUser.email ? (
              <div className="logout__button">
                <Avatar alt="A" src={loggedInUser.photoURL} />
                <Button onClick={userLogOut}>Login Out</Button>
              </div>
            ) : (
              <div className="signup__button">
                <Button onClick={handleRoute}>Sign up</Button>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
