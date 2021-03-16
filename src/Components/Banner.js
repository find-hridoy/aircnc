import React from "react";
import SearchForm from "./SearchForm";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__title">
        <h3>Where do you want to go</h3>
      </div>
      <div className="banner__section">
        <div className="banner__left">
            <SearchForm/>
        </div>
        <div className="banner__right">
            <div className="banner__exerinces"></div>
            <div className="banner__homes"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
