import { CardMedia } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React, { useState, useEffect } from "react";
import ConfirmHotelAccordion from "./ConfirmHotelAccordion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ConfirmHotelCard() {
  const [data, setData] = useState([]);
  const results = useSelector((res) => res.allHotelData);
  const { id } = useParams();
  useEffect(() => {
    results
      .filter((res) => res.id == id)
      .map((allData, index) => setData(allData));
  }, [id, results]);
  const { title, images, price, rating } = data;
  return (
    <div className="confirmHotel__card">
      <div className="confirmHotel__details">
        <div className="confirmHotel__details_content">
          <h4>{title}</h4>
          <p>
            <StarIcon />
            {rating}
            <span>(20 reviews)</span>
          </p>
        </div>
        {images && (
          <div className="confirmHotel__details_image">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={images.thumb}
              title="Contemplative Reptile"
            />
          </div>
        )}
      </div>
      <ConfirmHotelAccordion price={price} />
    </div>
  );
}

export default ConfirmHotelCard;
