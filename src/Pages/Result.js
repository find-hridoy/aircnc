import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Components/Header";
import ResultCard from "../Components/ResultCard";
import ResultMap from "../Components/ResultMap";
import LoginModal from "./LoginModal";

function Result() {
  const history = useHistory();
  const [data, setdata] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const result = useSelector((res) => res.data);
  useEffect(() => {
    result.map((res) => setdata(res));
  }, [result]);
  const {
    locationName,
    locationLat,
    locationLng,
    guestCount,
    checkIn,
    checkOut,
  } = data;

  const openModal = () => {
    history.push("/details");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="result">
      <Header />
      <div className="result__section">
        <div className="result__content">
          <div className="result__address">
            <p>
              252 stays, <Moment format="MMM DD">{checkIn}</Moment>-
              <Moment format="DD">{checkOut}</Moment>, {guestCount} guests
            </p>
            <h3>Stay in {locationName}</h3>
            <ul>
              <li>
                <Button>Cancellation flexibility</Button>
              </li>
              <li>
                <Button>Type of place</Button>
              </li>
              <li>
                <Button>Price</Button>
              </li>
              <li>
                <Button>More Filters</Button>
              </li>
            </ul>
          </div>
          <div className="result__hotel">
            <ResultCard openModal={openModal} />
            <ResultCard openModal={openModal} />
            <ResultCard openModal={openModal} />
            <ResultCard openModal={openModal} />
          </div>
        </div>
        <div className="result__map">
          <ResultMap lat={locationLat} lng={locationLng} />
        </div>
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default Result;
