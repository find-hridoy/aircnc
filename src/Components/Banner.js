import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchForm from "./SearchForm";
import SwiperCard from "./SwiperCard";
import { useSelector } from "react-redux";
import "../../node_modules/swiper/swiper.min.css";

function Banner() {
  const results = useSelector((res) => res.allHotelData);
  return (
    <div className="banner">
      <div className="banner__title">
        <h3>Where do you want to go</h3>
      </div>
      <div className="banner__section">
        <div className="banner__left">
          <SearchForm />
        </div>
        <div className="banner__right">
          <div className="banner__experince">
            <div className="experience__title">
              <h3>Expreiences</h3>
              <NavLink to="/experience">
                See all <ArrowForwardIosIcon />
              </NavLink>
            </div>
            <Swiper spaceBetween={15} slidesPerView={4}>
              {results.map((hotelData, index) => (
                <SwiperSlide key={index}>
                  <SwiperCard hotelData={hotelData} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="banner__home">
            <div className="home__title">
              <h3>Homes</h3>
              <NavLink to="/home">
                See all <ArrowForwardIosIcon />
              </NavLink>
            </div>
            <Swiper spaceBetween={15} slidesPerView={3}>
              {results.map((hotelData, index) => (
                <SwiperSlide key={index}>
                  <SwiperCard hotelData={hotelData} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
