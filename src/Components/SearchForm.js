import DateFnsUtils from "@date-io/date-fns";
import { Accordion, AccordionSummary, Button } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import React, { useState } from "react";
import AccordionCount from "./AccordionCount";

function SearchForm() {
  // Count
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [babieCount, setBabieCount] = useState(0);

  const handleAdultCount = (count) => {
    if (count && adultCount < 5) {
      setAdultCount(adultCount + 1);
    }
    if (!count && adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };
  const handleChildCount = (count) => {
    if (count && childCount < 5) {
      setChildCount(childCount + 1);
    }
    if (!count && childCount > 0) {
      setChildCount(childCount - 1);
    }
  };
  const handleBabieCount = (count) => {
    if (count && babieCount < 5) {
      setBabieCount(babieCount + 1);
    }
    if (!count && babieCount > 0) {
      setBabieCount(babieCount - 1);
    }
  };
  //Material Date
  //    const [selectedDate, setSelectedDate] = useState({
  //     checkIn: new Date(),
  //     checkOut: new Date()
  // });

  // const handleCheckInDate = (date) => {
  //     const newDates = { ...selectedDate }
  //     newDates.checkIn = date;
  //     setSelectedDate(newDates);
  // };
  // const handleCheckOutDate = (date) => {
  //     const newDates = { ...selectedDate }
  //     newDates.checkOut = date;
  //     setSelectedDate(newDates);
  // };
  //Material Date
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <form action="">
        <div className="search__location">
          <h4>LOCATION</h4>
          <input
            type="text"
            name=""
            placeholder="Add city, Landmark, or address"
          />
        </div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="search__date">
            <div className="search__toDate">
              <p>Arrival</p>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
            <div className="search__fromDate">
              <p>Departure</p>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
          </div>
        </MuiPickersUtilsProvider>
        <div className="">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel2a-header"
            >
              <p>Guests</p>
              <h4>
                {adultCount} ADULTS, {childCount} CHILD, {babieCount} BABIES
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionCount
                title="ADULTS"
                countValue={adultCount}
                handleCount={handleAdultCount}
              />
              <AccordionCount
                title="CHILD"
                age="Age 2-12"
                countValue={childCount}
                handleCount={handleChildCount}
              />
              <AccordionCount
                title="BABIES"
                age="Younger than 2"
                countValue={babieCount}
                handleCount={handleBabieCount}
              />
              <div className="accordion__button">
                <div></div>
                <Button size="small">Apply</Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="search__button">
          <Button>
            <SearchIcon /> Search
          </Button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
