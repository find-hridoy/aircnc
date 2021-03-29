import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

function ConfirmHotelAccordion() {
  return (
    <>
      <div className="confirmHotel__dates">
        <p className="confirmHotel__date">Dates</p>
        <div className="confirmHotel__date_box">
          <p>4/13/2020</p>
          <ArrowForwardIcon />
          <p>4/17/2020</p>
        </div>
      </div>
      <div className="confirmHotel__guests">
        <p className="confirmHotel__guest">Guests</p>
        <div className="confrimHotel__accordion">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel2a-header"
            >
              <p>3 guests</p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="confirmHotel__perNightPrice">
                <p>$34 x 4 nights</p>
                <p>$136</p>
              </div>
              <div className="confirmHotel__cleaningFee">
                <p>Cleaning fee</p>
                <p>$10</p>
              </div>
              <div className="confirmHotel__serviceFee">
                <p>Service fee</p>
                <p>$21</p>
              </div>
              <div className="confirmHotel__totalPrice">
                <p>Total</p>
                <p>$167</p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default ConfirmHotelAccordion;
