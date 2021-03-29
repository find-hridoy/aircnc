import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Components/Header";
import ResultCard from "../Components/ResultCard";
import ResultMap from "../Components/ResultMap";

function Result() {
  return (
    <div className="result">
      <Header />
      <div className="result__section">
        <div className="result__content">
          <div className="result__address">
            <p>252 stays, Apr 13-17, 3 guests</p>
            <h3>Stay in Dhaka Division</h3>
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
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
        <div className="result__map">
          <ResultMap />
        </div>
      </div>
    </div>
  );
}

export default Result;
