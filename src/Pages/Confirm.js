import React from "react";
import ConfirmHotelCard from "../Components/ConfirmHotelCard";
import MultiStep from "../Components/MultiStep";

function Confirm() {
  return (
    <div className="confirm">
      {/* <Header /> */}
      <div className="confirm__section">
        <div className="confirm__multistep">
          <MultiStep />
        </div>
        <div className="confirm__hotel">
          <ConfirmHotelCard />
        </div>
      </div>
    </div>
  );
}

export default Confirm;
