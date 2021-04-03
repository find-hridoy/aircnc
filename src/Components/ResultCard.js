import { Card, CardContent, CardMedia } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React from "react";

function ResultCard({ openModal }) {
  return (
    <div className="result__card">
      <Card onClick={openModal}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://a0.muscache.com/im/pictures/f4a11496-99d7-4c73-8b1c-2ba4c9a0c38d.jpg?im_w=720"
          title="Contemplative Reptile"
        />
        <CardContent>
          <p className="result__card_title">
            Light bright airy stylish apt & safe peaceful stay
          </p>
          <p className="result__card_gusts">
            4 guests 2 bedrooms 2 beds 2 baths
          </p>
          <p className="result__card_facilities">
            Wifi Air conditioning Kitchen
          </p>
          <p className="result__card_cancel">
            Cancellation flexibility availiable
          </p>
          <div className="result__rating__price">
            <p className="result__card_rating">
              <StarIcon />
              4.9 (20)
            </p>
            <p className="result__card_price">$34 / night</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResultCard;
