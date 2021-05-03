import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import ResultCard from "../Components/ResultCard";
import ResultMap from "../Components/ResultMap";

function Result() {
  const results = useSelector((res) => res.data);
  const allhotelData = useSelector((res) => res.allHotelData);
  const {
    locationName,
    locationLat,
    locationLng,
    guestCount,
    checkIn,
    checkOut,
  } = results;
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
            {allhotelData.map((hData, index) => (
              <ResultCard hotelData={hData} />
            ))}
          </div>
        </div>
        <div className="result__map">
          <ResultMap lat={locationLat} lng={locationLng} name={locationName} />
        </div>
      </div>
    </div>
  );
}

export default Result;
