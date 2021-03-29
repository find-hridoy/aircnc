import { Avatar, Button } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FlareIcon from "@material-ui/icons/Flare";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import StarIcon from "@material-ui/icons/Star";
import React, { useState } from "react";
import ConfirmHotelAccordion from "../Components/ConfirmHotelAccordion";
import Header from "../Components/Header";

function HotelDetails() {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="hotelDetails">
      <Header />
      <div className="hotelDetails__image">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=pexels-boonkong-boonpeng-1134176.jpg&fm=jpg"
          alt="hotel img"
        />
        <img
          src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1743231.jpg&fm=jpg"
          alt="hotel img"
        />
      </div>
      <div className="hotelDetails__section">
        <div className="hotelDetails__content">
          <div className="hotelDetails__box1">
            <div className="box1__content">
              <div className="box1__content_text">
                <h1>Light bright airy stylish apt & sage peaceful stay</h1>
                <p>Dhaka, Bangladesh</p>
                <p>
                  <span>4 guests</span>
                  <span>2 bedrooms</span>
                  <span>2 beds</span>
                  <span>2 baths</span>
                </p>
              </div>
              <div className="box1__content_info">
                <Avatar
                  alt="A"
                  src="https://images.pexels.com/photos/3771811/pexels-photo-3771811.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3771811.jpg&fm=jpg"
                />
                <h5>Rowdra</h5>
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
              <p>
                It’s newly constructed 7 storied building maintaining building
                code by a locally famous architect. Enough lights and natural
                air are playing here. The place (apartment) is calm and noise
                free. You’ll love my place for its lovely and bright looks
                comfortable stay. <br /> <br /> Bangladesh is a beauty with its
                six seasons and green. The people are hospitable and worm.It’s
                newly constructed 7 storied building maintaining building code
                by a locally famous architect. Enough lights and natural air are
                playing here. The place (apartment) is calm and noise free.{" "}
                <br /> <br />
                You’ll love my place for its lovely and bright looks comfortable
                stay. Bangladesh is a beauty with its six seasons and green. The
                people are hospitable and worm.
              </p>
              {readMore ? (
                <p>
                  <br />
                  You’ll love my place for its lovely and bright looks
                  comfortable stay. Bangladesh is a beauty with its six seasons
                  and green. <br /> <br />
                  The people are hospitable and worm.It’s newly constructed 7
                  storied building maintaining building code by a locally famous
                  architect.
                </p>
              ) : (
                ""
              )}
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
                  4.9
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
                $34/ <span>night</span>
              </h4>
              <p>
                <StarIcon />
                4.9
                <span>(20 reviews)</span>
              </p>
            </div>
            <ConfirmHotelAccordion />
            <div className="hotelDetails__reserve_button">
              <Button>Reserve</Button>
              <p>You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
