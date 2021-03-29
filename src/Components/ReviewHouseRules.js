import Button from "@material-ui/core/Button";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PetsIcon from "@material-ui/icons/Pets";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import WarningIcon from "@material-ui/icons/Warning";
import React, { useState } from "react";

function ReviewHouseRules({ handleNext }) {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="reviewHouse">
      <h2>Review house rules</h2>
      <div className="reviewHouse__stayDetails">
        <h4>3 nights in Dhaka</h4>
        <div className="reviewHouse__date">
          <div className="reviewHouse__fromDate">
            <div className="fromDate__date">
              <p>APR</p>
              <p>13</p>
            </div>
            <div className="fromDate__day_time">
              <p>Monday check-in</p>
              <p>After 12:00 PM</p>
            </div>
          </div>
          <div className="reviewHouse__toDate">
            <div className="toDate__date">
              <p>APR</p>
              <p>17</p>
            </div>
            <div className="toDate__day_time">
              <p>Thursday check-out</p>
              <p>After 11:00 AM</p>
            </div>
          </div>
        </div>
        <p className="self__checkin">Self check-in with building staff</p>
      </div>
      <div className="reviewHouse__rules">
        <h4>Things to keep in mind</h4>
        <ul>
          <li>
            <ChildFriendlyIcon />
            Suiitable for children and infants
          </li>
          <li>
            <PetsIcon />
            Pets allowed
          </li>
          <li>
            <WarningIcon />
            No parties or events
          </li>
          <li>
            <SmokingRoomsIcon />
            Smoking allowed
          </li>

          {readMore ? (
            <div>
              <li>
                <ChildFriendlyIcon />
                Suiitable for children and infants
              </li>
              <li>
                <PetsIcon />
                Pets allowed
              </li>
            </div>
          ) : (
            ""
          )}
          <button onClick={handleReadMore}>
            {readMore ? (
              <span>
                Read less
                <ExpandLessIcon />
              </span>
            ) : (
              <span>
                Read more
                <ExpandMoreIcon />
              </span>
            )}
          </button>
        </ul>
        <Button onClick={handleNext}>Agree and continue</Button>
      </div>
    </div>
  );
}

export default ReviewHouseRules;
