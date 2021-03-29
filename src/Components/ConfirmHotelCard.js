import { CardMedia } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import ConfirmHotelAccordion from "./ConfirmHotelAccordion";

function ConfirmHotelCard() {
  return (
    <div className="confirmHotel__card">
      <div className="confirmHotel__details">
        <div className="confirmHotel__details_content">
          <h4>Light bright airy stylish apt & safe peaceful stay</h4>
          <p>
            <StarIcon />
            4.9
            <span>(20 reviews)</span>
          </p>
        </div>
        <div className="confirmHotel__details_image">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image="https://a0.muscache.com/im/pictures/f4a11496-99d7-4c73-8b1c-2ba4c9a0c38d.jpg?im_w=720"
            title="Contemplative Reptile"
          />
        </div>
      </div>
      <ConfirmHotelAccordion />
    </div>
  );
}

export default ConfirmHotelCard;
