import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import React from "react";

function SwiperCard({ openModal }) {
  return (
    <div className="swiper__card">
      <Card onClick={openModal}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="120"
          image="https://a0.muscache.com/im/pictures/f4a11496-99d7-4c73-8b1c-2ba4c9a0c38d.jpg?im_w=720"
          title="Contemplative Reptile"
        />
        <CardContent>
          <p className="card__location">Photo Class - Los Angeles</p>
          <p className="card__title">Must Have L.A. Picures!</p>
          <p className="card__price">$ 39 per persion</p>
          <p className="card__rating">
            <StarIcon />
            4.7
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default SwiperCard;
