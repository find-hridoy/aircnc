import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useState } from "react";
import ConfirmAndPay from "./ConfirmAndPay";
import ReviewHouseRules from "./ReviewHouseRules";
import WhosComming from "./WhosComming";

function MultiStep() {
  const [activeStep, setActiveStep] = useState(0);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ReviewHouseRules handleNext={handleNext} />;
      case 1:
        return <WhosComming handleNext={handleNext} />;
      case 2:
        return <ConfirmAndPay handleNext={handleNext} />;
      default:
        return "Unknown step";
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div className="multistep__stepper">
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>
            1. Review house rules <ArrowForwardIosIcon />
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            2. Who's coming? <ArrowForwardIosIcon />
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            3. Confirm and pay <ArrowForwardIosIcon />
          </StepLabel>
        </Step>
      </Stepper>
      {getStepContent(activeStep)}
    </div>
  );
}
export default MultiStep;
