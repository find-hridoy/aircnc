import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import React from "react";

function SwiperCard({ hotelData }) {
  return (
    <>
      {hotelData && (
        <div className="swiper__card">
          <Card>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="120"
              image={hotelData.images.thumb}
              title="Contemplative Reptile"
            />
            <CardContent>
              <p className="card__location">Photo Class - Los Angeles</p>
              <p className="card__title">{hotelData.title}</p>
              <p className="card__price">$ {hotelData.price} per persion</p>
              <p className="card__rating">
                <StarIcon />
                {hotelData.rating}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

export default SwiperCard;
