import { Card, CardContent, CardMedia } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import { useHistory } from "react-router";

function ResultCard({ openModal, hotelData }) {
  const { id, title, images, guests, baths, beds, price, rating } = hotelData;
  const history = useHistory();
  const handleRoute = () => {
    history.push(`/details/${id}`);
  };
  return (
    <div className="result__card">
      <Card onClick={handleRoute}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={images.thumb}
          title="Contemplative Reptile"
        />
        <CardContent>
          <p className="result__card_title">{title}</p>
          <p className="result__card_gusts">
            {guests} guests {beds} bedrooms {beds} beds {baths} baths
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
              {rating} (20)
            </p>
            <p className="result__card_price">${price} / night</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResultCard;
