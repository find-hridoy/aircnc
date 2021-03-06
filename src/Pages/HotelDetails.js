import { Button } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FlareIcon from "@material-ui/icons/Flare";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import StarIcon from "@material-ui/icons/Star";
import React, { useState, useEffect } from "react";
import ConfirmHotelAccordion from "../Components/ConfirmHotelAccordion";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function HotelDetails() {
  const [data, setData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const results = useSelector((res) => res.allHotelData);
  const { id } = useParams();
  useEffect(() => {
    results
      .filter((res) => res.id == id)
      .map((allData, index) => setData(allData));
  }, [id, results]);
  const {
    title,
    images,
    guests,
    baths,
    beds,
    price,
    rating,
    description,
    moreDescription,
  } = data;

  console.log(images);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  const history = useHistory();
  const handleRoute = () => {
    history.push(`/confirm/${id}`);
  };
  return (
    <div className="hotelDetails">
      <Header />
      {images && (
        <div className="hotelDetails__image">
          <img src={images.thumb} alt="hotel img" />
          <img src={images.bImg} alt="hotel img" />
        </div>
      )}
      <div className="hotelDetails__section">
        <div className="hotelDetails__content">
          <div className="hotelDetails__box1">
            <div className="box1__content">
              <div className="box1__content_text">
                <h1>{title}</h1>
                <p>Dhaka, Bangladesh</p>
                <p>
                  <span>{guests} guests</span>
                  <span>{beds} bedrooms</span>
                  <span>{beds} beds</span>
                  <span>{baths} baths</span>
                </p>
              </div>
            </div>
          </div>
          <div className="hotelDetails__box2">
            <div className="hotelDetails__box2_rules">
              <ul>
                <li>
                  <HomeIcon />
                  <div>
                    <p>Entire home</p>
                    <p>You'll have the condominium to yourself.</p>
                  </div>
                </li>
                <li>
                  <CheckBoxIcon />
                  <div>
                    <p>Self check-in</p>
                    <p>You can check in with the doorman.</p>
                  </div>
                </li>
                <li>
                  <FlareIcon />
                  <div>
                    <p>Sparkling clean</p>
                    <p>10 recent guests said this place was sparkling clean.</p>
                  </div>
                </li>
                <li>
                  <PersonIcon />
                  <div>
                    <p>Rowdra is Superhost</p>
                    <p>
                      Superhosts are ecperienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="hotelDetails__box3">
            <div className="hotelDetails__box3_content">
              <p>{description}</p>
              <br />
              {readMore ? <p>{moreDescription}</p> : ""}
              <button onClick={handleReadMore}>
                {readMore ? (
                  <span>
                    Read less about the space
                    <ExpandLessIcon />
                  </span>
                ) : (
                  <span>
                    Read more about the space
                    <ExpandMoreIcon />
                  </span>
                )}
              </button>
              <div className="hotelDetails__rating">
                <h4>Reviews</h4>
                <p>
                  <StarIcon />
                  {rating}
                  <span>(20 reviews)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hotelDetails__confirm">
          <div className="hotelDetails__confirm_card">
            <div className="hotelDetails__rating">
              <h4>
                ${price}/ <span>night</span>
              </h4>
              <p>
                <StarIcon />
                {rating}
                <span>(20 reviews)</span>
              </p>
            </div>
            <ConfirmHotelAccordion price={price} />
            <div className="hotelDetails__reserve_button">
              <Button onClick={handleRoute}>Reserve</Button>
              <p>You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
